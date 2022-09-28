// ```
// Higher Order Functions:
// 		function accepts as an argument or returns another function as a result
// 	Call Back Function:
// 		function that passed to another function as an argument and executed inside that function.
//  ```;

function morning(name) {
  return `Good Morning ${name}`;
}

function noon(name) {
  return `Good Afternoon ${name}`;
}

function evening(name) {
  return `Good Evening ${name}`;
}

function night(name) {
  return `Good night ${name}`;
}

function greet(name, greetCallBack) {
  console.log(greetCallBack(name));
}

let hours = new Date().getHours();

if (hours < 12) {
  greet('nanda', morning);
} else if (hours > 12 && hours < 17) {
  greet('nanda', noon);
} else if (hours > 17 && hours < 20) {
  greet('nanda', evening);
} else {
  greet('nanda', night);
}
