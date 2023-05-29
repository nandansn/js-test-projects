// How do you get the prototype of an object

/**
 * You can use the Object.getPrototypeOf(obj) method to return the prototype of the specified object. i.e. The value of the internal prototype property. If there are no inherited properties then null value is returned.
 */

const newPrototype = {};
const newObject = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
