// empty args
let greet = () => console.log('hi');
greet();

// single arg
let greetArg = (fname) => console.log(`hi ${fname}`);
greetArg('nanda');

// multiple args
let greetArgs = (fname, time) => console.log(`hi ${fname} Good ${time}`);
greetArg('nanda', 'morning');

// return
let sum = (a, b) => a + b;
console.log(sum(10, 11));

// multiline
let multi = (a, b) => {
  let fixed = 2;
  return a * b * fixed;
};
console.log(multi(10, 11));

// return object
let person = (fname, age) => {
  return { fname, age };
};
console.log(person('k', 40));

let morning = () => console.log('good morning');
let evening = () => console.log('good evening');
let night = () => console.log('good night');

function greetMe(timeGreet) {
  timeGreet();
}

greetMe(morning);
greetMe(evening);
greetMe(night);

let add = (a, b) => console.log(a + b);
let div = (a, b) => console.log(a / b);

function calculator(a, b, arithOpertion) {
  arithOpertion(a, b);
}

calculator(10, 10, add);
calculator(10, 2, div);
