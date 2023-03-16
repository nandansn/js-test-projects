# Classes:

**In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods)**

## Basic Syntax

`class MyClass { // class methods constructor() { ... } method1() { ... } method2() { ... } method3() { ... } ... }`

- Then use new MyClass() to create a new object with all the listed methods.
- The constructor() method is called automatically by new, so we can initialize the object there.

`class User { constructor(name) { this.name = name; } sayHi() { alert(this.name); } } // Usage: let user = new User("John"); user.sayHi();`

- When new User("John") is called:
  - A new object is created.
  - The constructor runs with the given argument and assigns it to this.name.
  - Then we can call object methods, such as user.sayHi().

## What is a class?

- In JavaScript, a class is a kind of function.

`class User { constructor(name) { this.name = name; } sayHi() { alert(this.name); } } // proof: User is a function alert(typeof User); // function`

- What class User {...} construct really does is:

  - Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
  - Stores class methods, such as sayHi, in User.prototype.

  ## Not just a syntactic sugar

  - Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same thing without using the class keyword at all

    - First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.

    - Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype". That’s good, because if we for..in over an object, we usually don’t want its class methods.

    - Classes always use strict. All code inside the class construct is automatically in strict mode.

### Class Expression

- Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
- Here’s an example of a class expression:
  `let User = class { sayHi() { alert("Hello"); } };`

- Similar to Named Function Expressions, class expressions may have a name. If a class expression has a name, it’s visible inside the class only:

`// "Named Class Expression" // (no such term in the spec, but that's similar to Named Function Expression) let User = class MyClass { sayHi() { alert(MyClass); // MyClass name is visible only inside the class } }; new User().sayHi(); // works, shows MyClass definition alert(MyClass); // error, MyClass name isn't visible outside of the class`

- We can even make classes dynamically “on-demand”, like this:

`function makeClass(phrase) { // declare a class and return it return class { sayHi() { alert(phrase); } }; } // Create a new class let User = makeClass("Hello"); new User().sayHi(); // Hello`

### Getters/setters

- Just like literal objects, classes may include getters/setters, computed properties etc.
- Here’s an example for user.name implemented using get/set:
  `class User { constructor(name) { // invokes the setter this.name = name; } get name() { return this._name; } set name(value) { if (value.length < 4) { alert("Name is too short."); return; } this._name = value; } } let user = new User("John"); alert(user.name); // John user = new User(""); // Name is too short.`

### Computed names

`class User { ['say' + 'Hi']() { alert("Hello"); } } new User().sayHi();`

### Making bound methods with class fields

- if an object method is passed around and called in another context, this won’t be a reference to its object any more.

For instance, this code will show undefined:

> class Button {
> constructor(value) {
> this.value = value;
> }
>
> click() {
> alert(this.value);
> }
> }
>
> let button = new Button("hello");
>
> setTimeout(button.click, 1000); // undefined

The problem is called **losing this**.

- There are two approaches to fixing it, as discussed in the chapter Function binding:

  - Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
  - Bind the method to object, e.g. in the constructor.

Class fields provide another, quite elegant syntax:

> class Button {
> constructor(value) {
> this.value = value;
> }
> click = () => {
> alert(this.value);
> }
> }
> let button = new Button("hello");
> setTimeout(button.click, 1000); // hello

The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object. We can pass button.click around anywhere, and the value of this will always be correct.

## Class inheritance

- Class inheritance is a way for one class to extend another class.
- So we can create new functionality on top of the existing.

**Notes**

- Any expression is allowed after extends
- Class syntax allows to specify not just a class, but any expression after extends.
- For instance, a function call that generates the parent class:

`function f(phrase) { return class { sayHi() { alert(phrase); } }; } class User extends f("Hello") {} new User().sayHi(); `

- Here class User inherits from the result of f("Hello").
- That may be useful for advanced programming patterns when we use functions to generate classes depending on many conditions and can inherit from them.

### Overriding a method

- Usually, however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide "super" keyword for that.

    super.method(...) to call a parent method.
    super(...) to call a parent constructor (inside our constructor only).

**Notes**

As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super.
If accessed, it’s taken from the outer function. For instance:
