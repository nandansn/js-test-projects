/**
 * How do you determine two values same or not using object
 *
 * The Object.is() method determines whether two values are the same value.
 * 
 * Two values are the same if one of the following holds:

    both undefined
    both null
    both true or both false
    both strings of the same length with the same characters in the same order
    both the same object (means both object have same reference)
    both numbers and both +0 both -0 both NaN both non-zero and both not NaN and both have the same value.
 *
 */

Object.is("hello", "hello"); // true
Object.is(window, window); // true
Object.is([], []); // false
