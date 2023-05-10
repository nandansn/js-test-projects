// How do you convert date to another timezone in javascript

/**
 * You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,
 */

console.log(new Date().toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00
