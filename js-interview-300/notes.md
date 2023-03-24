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

```[label](https://www.google.com/maps/place/Penser/%4011.3280257%2C77.7374096%2C3a%2C75y%2C61.81h%2C90t/data%3D%213m7%211e1%213m5%211sRhB_7zYNM7c_hOT6qKSCxg%212e0%216shttps%3A//streetviewpixels-pa.googleapis.com/v1/thumbnail%3Fpanoid%3DRhB_7zYNM7c_hOT6qKSCxg%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D61.81389%26pitch%3D0%26thumbfov%3D100%217i13312%218i6656%214m7%213m6%211s0x3ba96fa20f222dd1%3A0xf871ca48da4e90a7%218m2%213d11.3280682%214d77.7374488%2110e5%2116s/g/11mqwmgly3)
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const john = new Person('John');
john.greet(); // prints "Hello, my name is John"

```

### Event Propogation:

- [ref] (https://javascript.info/bubbling-and-capturing)
