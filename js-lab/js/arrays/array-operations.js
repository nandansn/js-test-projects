/*


    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.

    */

let styles = ["jazz", "blues"];

styles.push("Rock-n-Roll");

styles[(styles.length - 1) / 2] = "Classics";

console.log(styles.shift());

styles.unshift(...["Rap", "Regger"]);

console.log(styles);

styles.p