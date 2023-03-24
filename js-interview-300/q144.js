/*

What are js labels
The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, 
the below code with labels avoids printing the numbers when they are same,

var i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"


*/
