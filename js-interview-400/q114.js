// How do you parse JSON string

/*

When receiving the data from a web server, the data is always in a string format. 
But you can convert this string value to a javascript object using parse() method.

var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}

*/
