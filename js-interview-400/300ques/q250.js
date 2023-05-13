// What is the advantage of a comma operator

/**
 * It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a for loop. For example, the below for loop uses multiple expressions in a single location using comma operator,
 */

for (var a = 0, b = 10; a <= 10; a++, b--)
  /**
   * You can also use the comma operator in a return statement where it processes before returning.
   */

  function myFunction() {
    var a = 1;
    return (a += 10), a; // 11
  }
