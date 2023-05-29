// What is the difference between proto and prototype

/**
 * The __proto__ object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas prototype is the object that is used to build __proto__ when you create an object with new.  
 * 
 */

new Employee().__proto__ === Employee.prototype;
new Employee().prototype === undefined;

// feature  |	            Prototype                                       |	proto
// Access   |	All the function constructors have prototype properties.    |	All the objects have __proto__ property
// Purpose	 | Used to reduce memory wastage with a single copy of function	| Used in lookup chain to resolve methods,  constructors etc.
// ECMAScript |	Introduced in ES6	                                    |  Introduced in ES5
// Usage	|           Frequently used	                                    |Rarely used