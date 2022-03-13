let amount = 10;

console.log('------------while------');
while (amount > 0) {
  console.log(amount);
  amount--;
}
console.log('------------do while------');
do {
  console.log(amount);
  amount++;
} while (amount < 11);
console.log('------------for------');
for (; amount > 0; amount--) {
  console.log(amount);
}
