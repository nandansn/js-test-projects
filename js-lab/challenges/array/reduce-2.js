let students = require("../students");

let total = students.reduce(
  (p, c) => {
    p[c.favouriteSubject] = p[c.favouriteSubject] + 1
    return p;
  },
  { math: 0, english: 0, science: 0 }
);

console.log(total);
