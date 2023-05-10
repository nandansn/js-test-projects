// What is the difference between isNaN and Number.isNaN?

/**
 * isNaN: The global function isNaN converts the argument to a Number and returns true if the resulting value is NaN.
Number.isNaN: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.
 */

isNaN(‘hello’);   // true
Number.isNaN('hello'); // false