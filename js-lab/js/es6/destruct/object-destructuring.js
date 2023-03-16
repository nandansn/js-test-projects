const person = {
  fname: 'nanda',
  lname: 'rangasamy',
  mob: '1234567',
  address: {
    city: 'erode',
    state: 'TN',
  },
};

const { fname, lname } = person;
console.log(fname, lname);

// with alias
const { mob: phone } = person;
console.log(phone);

// nested property
const {
  address: { city },
} = person;
console.log(city);
