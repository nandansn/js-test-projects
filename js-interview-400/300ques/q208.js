// List down the collection of methods available on WeakMap

/**
 * Below are the list of methods available on WeakMap,

set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
delete(key): Removes any value associated to the key.
has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
get(key): Returns the value associated to the key, or undefined if there is none. Let's see the functionality of all the above methods in an example,
 */

var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};
// set(key, value)
weakMapObject.set(firstObject, "John");
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); //true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);
