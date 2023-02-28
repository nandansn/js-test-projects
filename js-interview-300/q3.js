/* "What is the difference between Call, Apply and Bind", */

// Call: The call() method invokes a function with a given this value and arguments provided one by one

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

// bind: returns a new function, allowing you to pass any number of arguments

let person = {
  name: "John",
  age: 34,
  city: "London",
};

function display() {
  console.log(this);
}

display.call(person, 1, 2, 3);
display.apply(person, []);

let callOnDemand = display.bind(person);

callOnDemand();
