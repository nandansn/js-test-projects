/*

We have an object:

let user = {
  name: "John",
  years: 30
};

Write the destructuring assignment that reads:

    name property into the variable name.
    years property into the variable age.
    isAdmin property into the variable isAdmin (false, if no such property)
*/

let user = {
  name: "John",
  years: 30,
  isAdmin: true,
};

let { name, years, isAdmin = false } = user;

console.log(name, years, isAdmin);
