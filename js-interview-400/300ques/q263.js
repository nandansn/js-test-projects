// What are the different ways to make an object non-extensible

/**
 * You can mark an object non-extensible in 3 ways,

Object.preventExtensions
Object.seal
Object.freeze
 */

var newObject = {};

Object.preventExtensions(newObject); // Prevent objects are non-extensible
Object.isExtensible(newObject); // false

var sealedObject = Object.seal({}); // Sealed objects are non-extensible
Object.isExtensible(sealedObject); // false

var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
Object.isExtensible(frozenObject); // false
