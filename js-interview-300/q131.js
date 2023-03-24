// How do you display the current date in javascript

/*

You can use new Date() to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.write(today);

*/