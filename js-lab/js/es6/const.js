// define
const c = 1000;
console.log(c);

// update not allowed
// redefine not allowed

// non primitive
// define
const person = {
  name: 'kumar',
};
console.log(person);

// update, existing object property.
person.name = 'nKumar';
console.log(person);

// update, new object not allowed
// person = { age: 40 };
// console.log(person);

// redefine, not allowed
// const person = {
//   mobile: 9999999,
// };
// console.log(person);
