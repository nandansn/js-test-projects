let nums = [-1, 0, 1, null, undefined];

function check(values) {
  for (const value of values) {
    value
      ? console.log(`${value} is truthy`)
      : console.log(`${value} is falsy`);
  }
}

check(nums);

let chars = ['', 'a', 'ab', null, undefined];

check(chars);
