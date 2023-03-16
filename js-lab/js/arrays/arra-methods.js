let names = [];

// push
names.push("nanda");
names.push("kumar"); // push method returns the length of the array
console.log(names.push(""));
console.log(names);

// pop
names.pop(); //removes the last element in the array and  returns the value
console.log(names.pop());

// we can use push and pop to implement the stack DS.

names.unshift("kk"); // inserts element at the start of the array and returns new length of the array
console.log(names.unshift("bb"));
