const person = {
  fname: 'nanda',
  lname: 'rangasamy',
  mob: '1234567',
  address: {
    city: 'erode',
    state: 'TN',
  },
};

function display({ fname, lname, mob: phone, address: { state: st } }) {
  console.log(fname, lname, phone, st);
}

display(person)
