// define
let b = 100;
console.log(b);

// update
b = 200;
console.log(b);

// redefine not allowed
// let  b = 'nanda'

// non primitive
// define
let person = {
  name: 'kumar',
};
console.log(person);

// update, existing object.
person.name = 'nKumar';
console.log(person);

// update, new object allowed
person = { age: 40 };
console.log(person);

// redefine, not allowed
// let person = {
//   mobile: 9999999,
// };
// console.log(person);
