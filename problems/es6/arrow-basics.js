// online
let hello = () => console.log('hello');
hello();

(()=>console.log('iife'))();

// args

let sum = (a,b) => a + b;
console.log(sum(5,6));

// return obj

let person = (name,age,city) => {
    return {
        name,
        age,
        city
    }
}


console.log(person('nanda',40,'erode'));

// alternate way to return object

let car = (make,model,price) => ({make,model,price})

console.log(car('bmw','x9','1cr'));


