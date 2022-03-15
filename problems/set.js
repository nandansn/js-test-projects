const names = new Set();

names.add('nanda')
names.add('kumar')


console.log(names);

console.log(names.size);
console.log(names.has('kumar'));
console.log(names.keys());
console.log(names.entries());

names.delete('nanda')

console.log(names)

names.clear()

console.log(names);