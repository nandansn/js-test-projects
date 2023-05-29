// How do you group and nest console output?

/**
 * The console.group() can be used to group related log messages to be able to easily read the logs and use console.groupEnd()to close the group. Along with this, you can also nest groups which allows to output message in hierarchical manner.
 */

// outer group

console.group("user details");

console.log("name: nanda")
console.log("mobile: 123456");
console.log("city: erode");

// inner 1
console.group("employment")
console.log("company: zbce");
console.log("id: 123456");
console.log("salary: 450k");

// inner 2
console.group("performance")
console.log("rating: 100");

console.groupEnd()

console.groupEnd();

console.groupEnd();



