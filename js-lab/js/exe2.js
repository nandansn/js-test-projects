const gas = [10, 20.2, 30];
const food = [13, 14, 15.6];

let sum = (array) => {
  let tot = 0;
  for (let index = 0; index < array.length; index++) {
    tot += array[index];
  }

  return tot;
};

function analyze(exp) {
  if (exp.total > 100) {
    console.log('spending too much');
  } else {
    console.log('spending in control');
  }
}

let expenses = {
  gastotal: sum(gas),
  foodtotal: sum(food),
  total: sum(gas.concat(food)),
};

console.log(expenses);

analyze(expenses);
