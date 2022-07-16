let user = {
  id: 123,
  name: "nanda",
};

let idSymb = Symbol("id");
user[idSymb] = 1233434;
user[idSymb] = 523;
console.log(user[idSymb]);

let idSymb2 = Symbol("id");
let person = {
  id: 123,
  name: "nanda",
  [idSymb2]: 123456,
};

console.log(person[idSymb2]);
