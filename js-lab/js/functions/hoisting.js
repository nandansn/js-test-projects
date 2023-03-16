//'use strict';

console.log('myname:', myName); //myname: undefined
var myName = 'nanda';

//console.log(age); // Node error: Cannot access 'age' before initialization Browser error: ReferenceError: age is not defined
let age = 40;

//console.log(city); // Node error: Cannot access 'city' before initialization Browser error:
// ReferenceError: city is not defined
const city = 'erode';

greet();
function greet() {
  console.log('greetings....');
}
