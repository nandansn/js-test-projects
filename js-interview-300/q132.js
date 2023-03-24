// How do you compare two date objects

/*

You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False


*/