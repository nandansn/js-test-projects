/**
 * How do you get enumerable key and value pairs
 *
 * The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs,
 * in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,
 *
 *
 */

const object = {
  a: "Good morning",
  b: 100,
};

for (let [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`); // a: 'Good morning'
  // b: 100
}
