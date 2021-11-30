(function () {
  console.log('iife');
})();

let greet = 'Good Morning';

(function (greet) {
  console.log(greet);
})(greet);

let sum = (function (a, b) {
  return a + b;
})(10, 12);

console.log(sum);

let deposit = (function (amount) {
  let balance = 0; // we are making the balance as private
  return function () {
    return (balance += amount);
  };
})(100);
deposit();
deposit();
console.log(deposit());
