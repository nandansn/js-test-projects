// define
var a = 10;
console.log(a);

// update
a = 20;
console.log(a);

// redefine
var a = 'nanda';
console.log(a);

// non primitive
// define
var person = {
  name: 'kumar',
};
console.log(person);

// update, existing object.
person.name = 'nKumar';
console.log(person);

// update, new object created
person = { age: 40 };
console.log(person);

// redefine
var person = {
  mobile: 9999999,
};
console.log(person);
