function div(a, b) {
  try {
    printResult(); // error will be thrown because the method is not defined.
    console.log("code executed");
  } catch (error) {
    console.log("error accured");
  }
  console.log("after try");
}

div(10, "a");
