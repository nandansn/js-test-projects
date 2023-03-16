let number = 10;

function calc(m1, m2) {
  let result_1 = m1 + m2 + number; // number will be looked in local and then global if not found
  return result_1;
}

console.log(calc(20, 30));
