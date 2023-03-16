let person_1 = {
  name: 'nanda',
  age: 17,
  status: 'residents',
};

let person_2 = {
  name: 'nanda',
  age: 18,
  status: 'residents',
};

let person_3 = {
  name: 'nanda',
  age: 18,
  status: 'tourist',
};

let person_4 = {
  name: 'nanda',
  age: 17,
  status: 'tourist',
};

const validate = function (age, status) {
  if (age >= 18 && status === 'residents') {
    console.log('allowed');
  } else {
    console.log('not allowed');
  }
};

validate(person_1.age, person_1.status);
validate(person_2.age, person_2.status);
validate(person_3.age, person_3.status);
validate(person_4.age, person_4.status);
