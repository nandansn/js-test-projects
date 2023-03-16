let person = {
    name:'nanda',
    age:40,
    contact: {
        mobile:12345
    },
    cars:['bmw','audi'],
    "current_number":890786,
    info: function () {
        console.log(this.name);
    },
    // phone: () => {
    //     console.log(this); annonymous functions are part of the object so this refers to the object
    // }
}

console.log(person["current_number"]);

console.log(this);

person.info()

