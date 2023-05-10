"What are the possible ways to create objects in JavaScript";
// "What are the possible ways to create objects in JavaScript"

let p = {name:'abc'}

let createPerson = function (name, age) {
    return {
        name,
        age
    }
}

function Person(name,age) {
    this.name = name
    this.age = age

}

class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

Object.create({name: 'John', age:20})

let newP ={}
Object.assign(newP, p)

console.log(newP);

// Function constructor with prototype:

function Person2() {}
Person2.prototype.name = "Sudheer";
let object = new Person2();

// Singleton pattern:

let obj = new (function () {
    this.name = "John"
})();



console.log(obj);