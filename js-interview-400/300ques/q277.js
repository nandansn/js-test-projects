// give an example usage of rangeOverflow property

/**
 * If an element's value is greater than its max attribute then rangeOverflow property returns true. For example, the below form submission throws an error if the value is more than 100,
 */

<input id="age" type="number" max="100" />
<button onclick="myOverflowFunction()">OK</button>

function myOverflowFunction() {
  if (document.getElementById("age").validity.rangeOverflow) {
    alert("The mentioned age is not allowed");
  }
}