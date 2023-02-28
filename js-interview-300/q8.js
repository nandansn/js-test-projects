// How do you compare Object and Map

// Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
// You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
// A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
// A Map may perform better in scenarios involving frequent addition and removal of key pairs.

// The Object.create(null) method creates a new object with no prototype.

// In JavaScript, every object has a prototype, which is the object that the new object inherits properties and methods from. By default, when you create a new object using the object literal syntax (e.g., {}), the new object inherits from Object.prototype.

// However, sometimes you may not want your object to inherit any properties or methods from any prototypes. In such cases, you can use Object.create(null) to create a new object with no prototype.

// This can be useful in situations where you want to create an object that has a specific set of properties and methods, but you don't want it to inherit any properties or methods that might be added to the prototype chain later. It can also be used to create a dictionary-like object with no default properties.

const myObject = Object.create(null);
myObject.property1 = "value1";
myObject.property2 = "value2";
console.log(myObject.property1); // Output: 'value1'
console.log(myObject.toString); // Output: undefined

// In this example, myObject is created using Object.create(null), so it has no prototype. It is then assigned two properties (property1 and property2) and printed to the console. When we try to access myObject.toString, we get undefined because myObject has no prototype and therefore does not inherit the toString method from any prototype.
