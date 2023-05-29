// How do you define multiple properties on an object

/**
 * The Object.defineProperties() method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,
 */

const newObject = {};

Object.defineProperties(newObject, {
  newProperty1: {
    value: "John",
    writable: true,
  },
  newProperty2: {},
});
