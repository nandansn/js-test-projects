## Arrays

### About

- used to store ordered collection of data
- For example, we need that to store a list of something: users, goods, HTML elements etc.
  - It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

### Declaration

`let arr = new Array();`

`let names = ['nanda','kumar']`

- Array elements are numbered, starting with zero. - We can get an element by its number in square brackets - We can replace an element - add a new one to the array - The total count of the elements in the array is its length - An array can store elements of any type - you can use arr.at(i) or arr[i]
  `let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); }`

- Get last elements with “at”
  `array.at(-1)`

### A word about length

- The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

- the arr.length property can be modified.

### Methods pop/push, shift/unshift

- push appends an element to the end.
- pop removes an element from the end

- shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
- unshift, Add the element to the beginning of the arra

- Methods push and unshift can add multiple elements at once

- Queue Implementation, first in first out
  - push and shift
- Stack implementation, last in first out
  - push and pop

### Internals

- An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

- They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

- Array is an object and thus behaves like an object.

- The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.

- But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.

- The ways to misuse an array:

  - Add a non-numeric property like arr.test = 5.
  - Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
  - Fill the array in the reverse order, like arr[1000], arr[999] and so on.

### Loops:

- One of the oldest ways to cycle array items is the for loop over indexes

`for (let i = 0; i < arr.length; i++) { alert( arr[i] ); }`

- there is another form of loop, for..of

`for (let fruit of fruits) { alert( fruit ); }`

- because arrays are objects, it is also possible to use for..in:

`for (let key in arr) { alert( arr[key] ); // Apple, Orange, Pear }`

- But that’s actually a bad idea. There are potential problems with it:

  - The loop for..in iterates over all properties, not only the numeric ones.

  - There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

  - The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

- Generally, we shouldn’t use for..in for arrays

### new Array()

- There is one more syntax to create an array,
- If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length
  `let arr = new Array("Apple", "Pear", "etc"); let arr = new Array(2); // will it create an array of [2] ? alert( arr[0] ); // undefined! no elements. alert( arr.length ); // length 2`

  ### Multidimensional arrays

  - Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices,

  `let matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; alert( matrix[1][1] ); // 5, the central element`

  ### toString

  - Arrays have their own implementation of toString method that returns a comma-separated list of elements

  `let arr = [1, 2, 3]; alert( arr ); // 1,2,3 alert( String(arr) === '1,2,3' ); // true`

  - Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

- When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:

`alert( "" + 1 ); // "1" alert( "1" + 1 ); // "11" alert( "1,2" + 1 ); // "1,21"`

#### how to compare arrays?

That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods

---

## Array methods

### Add/remove items

We already know methods that add and remove items from the beginning or the end:

- arr.push(...items) – adds items to the end,
- arr.pop() – extracts an item from the end,
- arr.shift() – extracts an item from the beginning,
- arr.unshift(...items) – adds items to the beginning.

### splice

- How to delete an element from the array?

- The arrays are objects, so we can try to use delete:

  `{ let arr = ["I", "go", "home"]; delete arr[1]; // remove "go" alert( arr[1] ); // undefined // now arr = ["I", , "home"]; alert( arr.length ); // 3 }`

- The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

- That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

- So, special methods should be used.

- The **arr.splice** method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

**syntax**

`arr.splice(start[, deleteCount, elem1, ..., elemN])`

**Negative indexes allowed**

`let arr = [1, 2, 5]; // from index -1 (one step from the end) // delete 0 elements, // then insert 3 and 4 arr.splice(-1, 0, 3, 4); alert( arr ); // 1,2,3,4,5`

### slice

**Syntax**
`arr.slice([start], [end])`

It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

`let arr = ["t", "e", "s", "t"]; alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3) alert( arr.slice(-2) ); // s,t (copy from -2 till the end)`

We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

### concat

The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

`arr.concat(arg1, arg2...)`

It accepts any number of arguments – either arrays or values.
The result is a new array containing items from arr, then arg1, arg2 etc.
If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

**code start**

let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

**code end**

Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

**code start**

let arr = [1, 2];

let arrayLike = {
0: "something",
length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]

**code end**

But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

**code start**

let arr = [1, 2];

let arrayLike = {
0: "something",
1: "else",
[Symbol.isConcatSpreadable]: true,
length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

**code end**

### Iterate: forEach

**The syntax:**

arr.forEach(function(item, index, array) {
// ... do something with item
});

### Searching in array

#### indexOf/lastIndexOf and includes

The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

    arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    arr.includes(item, from) – looks for item starting from index from, returns true if found.

The **includes** method handles NaN correctly

A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)

#### find and findIndex/findLastIndex

Imagine we have an array of objects. How do we find an object with the specific condition?

The syntax is:

**code start**

let result = arr.find(function(item, index, array) {
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
});

The function is called for elements of the array, one after another:

    item is the element.
    index is its index.
    array is the array itself.

**code end**

#### filter

The find method looks for a single (first) element that makes the function return true.
If there may be many, we can use arr.filter(fn).
The syntax is similar to find, but filter returns an array of all matching elements:

**code start**

let results = arr.filter(function(item, index, array) {
// if true item is pushed to results and the iteration continues
// returns empty array if nothing found
});

**code end**

### Transform an array

Let’s move on to methods that transform and reorder an array.

#### map

The arr.map method is one of the most useful and often used.
It calls the function for each element of the array and returns the array of results.
The syntax is:

**code start**

let result = arr.map(function(item, index, array) {
// returns the new value instead of item
});

**code end**

---

#### sort

The call to arr.sort() sorts the array in place, changing its element order.
It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

**code start**

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr ); // 1, 15, 2

**code end**

Did you notice anything strange in the outcome?
The order became 1, 15, 2. Incorrect. But why?
The items are sorted as strings by default.
Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
To use our own sorting order, we need to supply a function as the argument of arr.sort().
The function should compare two arbitrary values and return:

**code start**

function compareNumeric(a, b) {
if (a > b) return 1;
if (a == b) return 0;
if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15

**code end**

---

#### reverse

The method arr.reverse reverses the order of elements in arr.

**code start**

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1

**code end**

---

#### split

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

**code start**

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
alert( `A message to ${name}.` ); // A message to Bilbo (and other names)
}

**code end**

The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

**code start**

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf

**code end**

---

#### join

The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

**code start**
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
**code end**

---

#### reduce/reduceRight

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

The syntax is:

**code start**

let value = arr.reduce(function(accumulator, item, index, array) {
// ...
}, [initial]);

**code end**

Arguments:

- accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
- item – is the current array item.
- index – is its position.
- array – is the array.

The method **arr.reduceRight** does the same, but goes from right to left.

---

#### Array.isArray

Arrays do not form a separate language type. They are based on objects.

So typeof does not help to distinguish a plain object from an array:

**code start**

alert(typeof {}); // object
alert(typeof []); // object (same)

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

**code end**

#### Most methods support “thisArg”

Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

The value of thisArg parameter becomes this for func.

**code start**

let army = {
minAge: 18,
maxAge: 27,
canJoin(user) {
return user.age >= this.minAge && user.age < this.maxAge;
}
};

let users = [
{age: 16},
{age: 20},
{age: 23},
{age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

**code end**
