const gas = [10, 20.2, 30];
const food = [13, 14, 15.6];

let sum = (array) => {
  let tot = 0;
  for (let index = 0; index < array.length; index++) {
    tot += array[index];
  }

  return tot;
};

console.log(sum(gas.concat(food)));
