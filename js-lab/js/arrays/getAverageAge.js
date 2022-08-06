let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge() {
  let count = arr.length;

  let sum = arr.reduce((tot, curr) => {
    return (tot = curr.age + tot);
  }, 0);
  let avg = sum / count;
  return avg;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
