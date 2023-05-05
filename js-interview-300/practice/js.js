let rExp = new RegExp("(abc)", "ig");

console.log(rExp.test("nandaabcdc"));
console.log("nandakkabcdcakbcabcdefabc".match(rExp));

function addTwoNumbers(a, b) {
  let c = a + b;
  debugger;
  return c;
}

console.log(addTwoNumbers(2, 3));
