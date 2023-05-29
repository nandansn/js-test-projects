// How do you create an object with prototype

/**
 * The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.
 *
 */

let person = {
  name: "John",
  age: 30,
  city: "New York",
  display: function () {
    console.log(this.name, this.age);
  },
};

let employee = Object.create(person);

employee.name = "nanda";

employee.company = "ABC";

console.log(employee.display());
console.log(person.display());
