/*

https://exploringjs.com/impatient-js/ch_numbers.html#binary-arithmetic-operators

*/

7.toString(); // syntax error

// There are four ways to work around this pitfall:

7.0.toString() // 7 
(7).toString() // 7 
7..toString() // 7 
7 .toString() // 7  // space before dot
