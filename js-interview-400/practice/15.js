function sumA(a) {
  return function sumB(b) {
    return function sumC(c) {
      return a + b + c;
    };
  };
}

console.log(sumA(1)(2));
