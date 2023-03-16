let person = [
  { fname: 'nanda', age: 40 },
  { fname: 'kumar', age: 36 },
];

let pp = person.find(function (p) {
  return p.fname === 'nanda';
});

console.log(pp);
