/*

The maximal salary
importance: 5

There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Create the function topSalary(salaries) that returns the name of the top-paid person.

    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.

P.S. Use Object.entries and destructuring to iterate over key/value pairs.

*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Kali: 20,
};

function topSalary() {
  let highSalary = Object.entries(salaries).sort((a, b) => a[1] - b[1]);
  return highSalary[highSalary.length - 1][0];
}

function sortBySalary() {
  let sortedSalary = {};
  Object.entries(salaries)
    .sort((a, b) => a[1] - b[1])
    .forEach((item) => {
      sortedSalary[item[0]] = item[1];
    });
  console.log(sortedSalary);
}

console.log(topSalary(salaries));
sortBySalary();
