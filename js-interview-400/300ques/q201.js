// How can you get the list of keys of any object

let person = {
  name: "John",
  age: 30,
  city: "New York",
  display: function () {
    console.log(this.name, this.age);
  },
};

console.log(Object.keys(person));

let employee = Object.create(person);

employee.name = 'nanda'

employee.company = "ABC";

console.log(employee.display());
console.log(person.display());


