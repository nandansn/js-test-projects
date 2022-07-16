## Arrays

### About

- used to stored ordered collection of data
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
