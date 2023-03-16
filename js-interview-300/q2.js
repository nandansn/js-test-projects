/* "What is prototype chain", */

/* In JavaScript, every object has a prototype, which is a reference to another object. The prototype object itself can also have a prototype, forming a chain of objects linked by their prototype references. This chain of linked objects is called the "prototype chain".

When you access a property or method on an object, JavaScript first checks if that property or method exists on the object itself. If it does not exist on the object, JavaScript will look for it on the object's prototype. If the property or method is still not found, it will continue up the prototype chain until it either finds the property/method or reaches the end of the chain (i.e., the Object.prototype object).

By leveraging the prototype chain, JavaScript allows objects to inherit properties and methods from their prototypes. This inheritance mechanism is a key feature of JavaScript's object-oriented programming paradigm and allows for code reuse and modularity./*  */ */