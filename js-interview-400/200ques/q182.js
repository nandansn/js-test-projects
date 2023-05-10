// How to convert string to title case with javascript

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Example usage
var myString = "the quick brown fox jumps over the lazy dog";
var myTitleCaseString = toTitleCase(myString);
console.log(myTitleCaseString); // Outputs: "The Quick Brown Fox Jumps Over The Lazy Dog"
