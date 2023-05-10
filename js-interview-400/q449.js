// What is Function Composition?

/**
 * It is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.
 */


let double = x => x ** 2
let mulBy2 = x => x * 2


let result = mulBy2(double(2))

console.log(result);