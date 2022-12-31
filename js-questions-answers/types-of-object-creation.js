// What are the possible ways to create objects in JavaScript

// 1 Using object literal

const person = {
    name:'nanda',
    age:43
}

console.log(person);

// using function constructor

function Employee(name,age) {
    this.name = name;
    this.age = age;
}

let emp1 = new Employee('nanda',33)

console.log(emp1);

// using class

class Square {
    constructor(w,h) {
        this.w = w
        this.h = h
    }
}

let box1 = new Square(4,4)
console.log(box1);

// Function constructor with prototype:

function Company() {
    
}

Company.prototype.name = "73Cents"
let cObjt = new Company();
console.log(cObjt.name);
let dObjt = new Company();
dObjt.name = 'nanda'
console.log(dObjt.name);
console.log(cObjt.name);
// Object's create method:

let newObj = Object.create(null)
console.log(newObj);


// This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

function func() {};

new func(1, 1, 1);

// (OR)

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, 1, 2, 3)
func.bind()

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);


// Singleton pattern:

let objOne = new (function () { this.name='nanda' })();

console.log(objOne);

console.log(Object.getPrototypeOf(objOne))

function Car() {


    
    
}

Car.prototype.color = 'red'

let c = new Car()


console.log(Object.getPrototypeOf(c));
console.log(Object.prototype);

