let person = {
   name:'nanda',
   age:40,
   job:'developer'

}

console.log(person);
let copyPerson = {...person} // to copy the object without affecting the original
let newPerson = {...person, city:'erode'} // adding new property
let overRide = {...person, name:'kk'}
console.log(copyPerson);
console.log(newPerson);
console.log(overRide);