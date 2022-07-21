## Iterables

---

Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

If an object isn’t technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it, so let’s see how to make it work.

### Symbol.iterator

For instance, we have an object that is not an array, but looks suitable for for..of.
Like a range object that represents an interval of numbers:

- To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

  - When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
  - Onward, for..of works only with that returned object.
  - When for..of wants the next value, it calls next() on that object.
  - The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

**code starts**

let range = {
from: 1,
to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

// ...it returns the iterator object:
// 2. Onward, for..of works only with the iterator object below, asking it for next values
return {
current: this.from,
last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }

};
};

// now it works!
for (let num of range) {
alert(num); // 1, then 2, 3, 4, 5
}

**code ends**

Please note the core feature of iterables: separation of concerns.

- The range itself does not have the next() method.
- Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.

---

### String is iterable

Arrays and strings are most widely used built-in iterables.

For a string, for..of loops over its characters:

**code starts**

for (let char of "test") {
// triggers 4 times: once for each character
alert( char ); // t, then e, then s, then t
}

**code ends**

---

### Iterables and array-likes

Two official terms look similar, but are very different. Please make sure you understand them well to avoid the confusion.

    Iterables are objects that implement the Symbol.iterator method, as described above.
    Array-likes are objects that have indexes and length, so they look like arrays.

When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both.

For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).

But an iterable may be not array-like. And vice versa an array-like may be not iterable.

For example, the range in the example above is iterable, but not array-like, because it does not have indexed properties and length.

And here’s the object that is array-like, but not iterable:

**code starts**

let arrayLike = { // has indexes and length => array-like
0: "Hello",
1: "World",
length: 2
};

// Error (no Symbol.iterator)
for (let item of arrayLike) {}

**code ends**

Both iterables and array-likes are usually not arrays, they don’t have push, pop etc. That’s rather inconvenient if we have such an object and want to work with it as with an array. E.g. we would like to work with range using array methods. How to achieve that?

---

### Array.from

There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.

- The same happens for an iterable

**code starts**

let arrayLike = {
0: "Hello",
1: "World",
length: 2
};

let arr = Array.from(arrayLike); // (\*)
alert(arr.pop()); // World (method works)

**code ends**

The full syntax for Array.from also allows us to provide an optional “mapping” function:

`Array.from(obj[, mapFn, thisArg])`

- The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.

**code starts**

// assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num \* num);

alert(arr); // 1,4,9,16,25

**code ends**

Here we use Array.from to turn a string into an array of characters:

**code starts**

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

**code ends**

---

## Summary:

Objects that can be used in for..of are called iterable.

    Technically, iterables must implement the method named Symbol.iterator.
        The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
        An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the end of the iteration process, otherwise the value is the next value.
    The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
    Built-in iterables like strings or arrays, also implement Symbol.iterator.
    String iterator knows about surrogate pairs.

Objects that have indexed properties and length are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays, because that’s more abstract.

Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
