// What are the bitwise operators available in javascript

/**
 * Bitwise AND ( & )
Bitwise OR ( | )
Bitwise XOR ( ^ )
Bitwise NOT ( ~ )
Left Shift ( << )
Sign Propagating Right Shift ( >> )
Zero fill Right Shift ( >>> )
 */

// left shift

// Shift left by 1 position
var num1 = 10; // binary representation: 00001010
var shifted1 = num1 << 1; // binary representation: 00010100 (decimal: 20)

// Shift left by 2 positions
var num2 = 7; // binary representation: 00000111
var shifted2 = num2 << 2; // binary representation: 00011100 (decimal: 28)

var num1 = 20;     

shifted1 = num1 >> 1; // binary representation: 00001010 (decimal: 10)
shifted1 = num1 >>> 1;   // binary representation: 00001010 (decimal: 10)
