// What are the DOM methods available for constraint validation

/**
 * The below DOM methods are available for constraint validation on an invalid input,

checkValidity(): It returns true if an input element contains valid data.
setCustomValidity(): It is used to set the validationMessage property of an input element. Let's take an user login form with DOM validations
 */

function myFunction() {
  var userName = document.getElementById("uname");
  if (!userName.checkValidity()) {
    document.getElementById("message").innerHTML = userName.validationMessage;
  } else {
    document.getElementById("message").innerHTML = "Entered a valid username";
  }
}