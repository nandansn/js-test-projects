/**
 * What is the main difference between Object.values and Object.entries method
 *
 * The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.
 *
 */

const data = require("./data");

console.log(Object.values(data.product));

for (const [k, v] of Object.entries(data.product)) {
  console.log(k,"=>", v);
}
