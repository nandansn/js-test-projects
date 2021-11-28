const names = ['ak', 'bk', 'ck', 'dk'];
const lName = 'cx';
const newArray = [];
for (let index = 0; index < names.length; index++) {
  newArray.push(`${names[index]} ${lName}`);
}

console.log(newArray);
