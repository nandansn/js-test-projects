// What is the difference between get and defineProperty

/**
 * Both have similar results until unless you use classes. If you use get the property will be defined on the prototype of the object whereas using Object.defineProperty() the property will be defined on the instance it is applied to.
 */