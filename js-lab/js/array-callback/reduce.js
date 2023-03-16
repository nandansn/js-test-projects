let cart = [
  {
    id: 1,
    name: 'cake',
    price: 12,
  },
  {
    id: 2,
    name: 'cookie',
    price: 14,
  },
];

let total = cart.reduce(function (total, currItem) {
  total += currItem.price;

  return total;
}, 0);

console.log(total);
