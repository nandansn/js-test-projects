let nifty50 = ["itc", "hdfc", "reliance"];

let deleted = nifty50.splice(0, 1); // removing an element from 0th position
console.log(deleted);
console.log(nifty50);

nifty50.push(...["bajaj auto", "maruti"]);
console.log(nifty50);

deleted = nifty50.splice(1, 2); // deleting multiple elements

console.log(nifty50);

nifty50.push("yes bank", "vedanta");
console.log(nifty50);

nifty50.splice(2, 1, "z", "w"); // delete and replace with element/elements
console.log(nifty50);

nifty50.splice(-1, 1, "abc"); // delete and inserts the element/elements from the last
console.log(nifty50);
