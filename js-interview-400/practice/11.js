
let person = {
    name: 'John',
}

let display = () => {
    console.log(this); // will print empty object
}


display();



display.apply(person);