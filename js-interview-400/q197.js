/**
 * What are the differences between freeze and seal methods
 *
 * If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.
 */

let person = {
  name: "John",
  age: 30,
  emp: {
    id: 1234,
  },
};

Object.freeze(person);

person.age = 40;
person.emp.id = 5678; // nested properties can be changed
person.emp.contact = {
  email: "XXXXXXXXXXXXXX",
  mobile: "XXXXXXXXXXXXXX",
};

delete person.emp.contact.mobile; // nested properties can be deleted

console.log(person);

person.emp.health = {
  bloodGroup: "A+",
};

console.log(person);

let car = {
  brand: "Ford",
  price: 15000,
  spec: {
    color: "red",
    year: 2000,
    engine: "petrol",
  },
};

Object.seal(car);
car.brand = "maruti";
car.spec.year = 2020;
delete car.spec.engine; // nested properties can be deleted
console.log(car);
