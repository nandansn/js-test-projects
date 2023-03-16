const nifty = require('../data/nifty50')
// String Includes

let name = "nandakumar";

console.log(name.includes("nanda"));

// Array Includes

let names = ["abc", "bca"];

console.log([2, 3, 4, 5, 6, 7, 1, 2, 3].includes(1, 6));

let days = new Set(["sunday", "monday", "tuesday", "wednesday", "sunday"]);

console.table(days);


let stocksUp = nifty
  .filter((item) => parseFloat(item.per) > 0)
  .map((item) => {
    let { symbol, open, high, low, per:percent } = { ...item };
    return { symbol, open, high, low, percent:"+"+percent };
  });

let stocksDown = nifty
  .filter((item) => parseFloat(item.per) < 0)
  .map((item) => {
    let { symbol, open, high, low, per: percent } = { ...item };
    return { symbol, open, high, low, percent: percent };
  }).sort((x,y) =>  parseFloat(x.percent)-parseFloat(y.percent))

// let sName = {...stocksUp[1]}

console.table(stocksUp);

console.table(stocksDown);


let sum = ({a,b,c}) => {
    return a+b+c
}

console.log(sum({a:1,b:2,c:3}))

let arraySum = (arr) => {
    return arr.reduce((s,t) => {return t = t + s},0)
}

console.log(arraySum([1,2,3,5,6,7]));

window.fetch()

