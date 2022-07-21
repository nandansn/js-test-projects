## WeakMap and WeakSet

### Intro

JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

**code starts**

let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

**code ends**

Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.

**code starts**

let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

**code ends**

Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

**code starts**

let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

**code ends**

### WeakMap

- The first difference between Map and WeakMap is that keys must be objects, not primitive values:

**code starts**

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

**code ends**

- Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

**code starts**

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!

**code ends**

- WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

### WeakSet

WeakSet behaves similarly:

- It is analogous to Set, but we may only add objects to WeakSet (not primitives).
- An object exists in the set while it is reachable from somewhere else.
- Like Set, it supports add, has and delete, but not size, keys() and no iterations.

Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

For instance, we can add users to WeakSet to keep track of those who visited our site:

**code starts**

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically

**code ends**

The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.

---

### Summary

WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

That comes at the cost of not having support for clear, size, keys, values…

WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.