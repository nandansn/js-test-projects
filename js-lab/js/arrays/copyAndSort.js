/*

Copy and sort the array

*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted() {
  let copyArray = [...arr];
  copyArray.sort((a, b) => a.length - b.length);
  return copyArray;
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
