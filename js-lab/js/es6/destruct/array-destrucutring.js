const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const [d1, d2, d3, d4] = days;
console.log(d1, d2, d3, d4);

// unavailable index
const [a1, a2, a3, a4, a5, a6, a7, a8] = days;
console.log(a1, a2, a3, a4, a5, a6, a7, a8);

// skipping the values
const [c1, , c3, , c5, , c7, c8] = days;
console.log(c1, c3, c5, c7, c8);
