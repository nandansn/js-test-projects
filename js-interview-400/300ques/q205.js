// List down the collection of methods available on WeakSet

/**
 * Below are the list of methods available on WeakSet,

add(value): A new object is appended with the given value to the weakset
delete(value): Deletes the value from the WeakSet collection.
has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.
 */

var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};
// add(value)
weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
console.log(weakSetObject.has(firstObject)); //true
weakSetObject.delete(secondObject);
