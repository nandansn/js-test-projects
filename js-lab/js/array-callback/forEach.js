const nums = [1, 2, 3, 4, 5, 6, 7];

function oddoreven(num) {
  return num % 2 === 0 ? { n: num, even: true } : { n: num, odd: true };
}

nums.forEach((num) => console.log(oddoreven(num))); // here we are not invoking, we are passing, this will get execute in the forEach method
