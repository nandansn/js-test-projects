function fullName(param_1, param_2) {
  return `${param_1} ${param_2}`.toUpperCase();
}

console.log(fullName('Nandakumar', 'Rangasamy'));

console.log(fullName('Rangasamy', 'Nandakumar'));

let person = {
  fName: 'Nanda',
  lName: 'Ranga',
};

console.log(fullName(person.fName, person.lName));
