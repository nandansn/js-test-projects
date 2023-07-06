let sum = a => b => c => a + b + c;


let a = sum(1)(2)(3);


console.log(a);


// use case, if youe want to ge the list of properties, dynamically. use currying


// Create an array of person objects using object literals
var people = [
    {
      name: "Person 1",
      age: 20,
      email: "person1@example.com"
    },
    {
      name: "Person 2",
      age: 30,
      email: "person2@example.com"
    },
    {
      name: "Person 3",
      age: 25,
      email: "person3@example.com"
    },
    // Add more person objects as needed
    // ...
  ];
  
  // Print the array of person objects
  function getPropertyOf(obj) {

    return function prop(name) {
            return obj[name];
    }
    
  }
  

  let properties = function (obj, property) {
    return obj.map(p => getPropertyOf(p)(property));
  }

  let names = properties(people, "email");

  console.log(names);