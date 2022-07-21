// definition - 1
let stocks = ["itc", "exide", "pfc"];

// definition -2
let books = new Array(4); // 4 empty items will be created.
let music = new Array();
let numbers = new Array(1, 2, 3);

// length property
console.log(stocks.length);
console.log(books.length);
console.log(music.length);

// adding the item to the last
books.push("a");
books.push("b");
books.push("c");
books.push("d");

console.log(books); // 4 array blocks will be blank
console.log(numbers);

books.length = 0;

console.log(books);
