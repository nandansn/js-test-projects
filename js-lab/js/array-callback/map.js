let employees = [
  {
    fname: 'kumar',
    age: 25,
    position: 'dev',
  },
  {
    fname: 'sanmathi',
    age: 36,
    position: 'HR',
  },
  {
    fname: 'nivrithi',
    age: 12,
    position: 'designer',
  },
  {
    fname: 'nanda',
    age: 40,
    position: 'ceo',
  },
];

let salary = function (emp) {
  if (emp.position === 'ceo') {
    return (salary = '1000000000');
  } else {
    return (salary = '200000');
  }
};

console.log(employees.map(salary));
