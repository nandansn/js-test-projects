/*

What are the recommendations to create new object
It is recommended to avoid creating new objects using new Object(). Instead you can initialize values based on it's type to create the objects.

Assign {} instead of new Object()
Assign "" instead of new String()
Assign 0 instead of new Number()
Assign false instead of new Boolean()
Assign [] instead of new Array()
Assign /()/ instead of new RegExp()
Assign function (){} instead of new Function()
You can define them as an example,

var v1 = {};
var v2 = "";
var v3 = 0;
var v4 = false;
var v5 = [];
var v6 = /()/;
var v7 = function () {};

*/
