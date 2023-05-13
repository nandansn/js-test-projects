// How do you set prototype of one object to another

/**
 * You can use the Object.setPrototypeOf() method that sets the prototype (i.e., the internal Prototype property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,
 */

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
Object.setPrototypeOf({}, null);
