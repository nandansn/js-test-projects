### What is lecical environnement?

- where variables and functions physically present.

### what is namespace?

namespacing is a technique used to organize code and prevent naming collisions between different parts of a program. Namespacing involves grouping related variables, functions, and other identifiers together under a unique name or identifier, which serves as a namespace for those elements.

For example, suppose you are building a web application that includes several JavaScript modules, each of which defines a function called getUserData(). Without namespacing, there would be a naming conflict between the different modules, and it would be difficult to know which function to call.

To solve this problem, you can use namespacing to group the functions together under a unique namespace. One way to do this is to define an object that serves as a namespace and add the functions as properties of that object. For example:

```
// Define a namespace object
const myApp = {};

// Define a function in the namespace
myApp.getUserData = function() {
  // ...
};

```

With this approach, you can call the getUserData() function as myApp.getUserData() to avoid naming conflicts.

Namespacing is a common technique in many programming languages, and it is especially useful in large applications where different modules or libraries may have overlapping names. By using unique namespaces, you can organize your code more effectively and avoid naming conflicts, which can help to reduce bugs and make your code more maintainable.

### **proto** vs prototype

- '**proto**', on the other hand, is a property of an object that points to its prototype.
  It is used to access an object's prototype chain.

Ref: (https://www.youtube.com/watch?v=DqGwxR_0d1M)

- 'prototype' is a property of a constructor function, and it is used to define the properties and methods that will be inherited by instances created with that constructor.

```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const john = new Person('John');
john.greet(); // prints "Hello, my name is John"

```
