// How does synchronous iteration works

/**
 * Synchronous iteration was introduced in ES6 and it works with below set of components,

Iterable: It is an object which can be iterated over via a method whose key is Symbol.iterator. Iterator: It is an object returned by invoking [Symbol.iterator]() on an iterable. This iterator object wraps each iterated element in an object and returns it via next() method one by one. IteratorResult: It is an object returned by next() method. The object contains two properties; the value property contains an iterated element and the done property determines whether the element is the last element or not.
 */

const iterable = ["one", "two", "three"];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'one', done: false }
console.log(iterator.next()); // { value: 'two', done: false }
console.log(iterator.next()); // { value: 'three', done: false }
console.log(iterator.next()); // { value: 'undefined, done: true }
