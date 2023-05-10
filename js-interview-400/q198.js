/**
 * How do you determine if an object is sealed or not
 *
 */
const person = {
  name: "John",
  age: 30,
};

Object.seal(person);

console.log(person);
console.log(Object.isSealed(person));
