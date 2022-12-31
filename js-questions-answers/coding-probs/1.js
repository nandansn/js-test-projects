

let person = {
    name:"nanda"
}


console.log(typeof person);

function createPerson(name,age) {
    return {
        name,
        age,
        display() {
            console.log(this.name);
        }
    }
}

console.log(createPerson('nanda',43).display());


function Car(brand, color) {
    this.brand = brand
    this.color = color
    this.info = function () {
        console.log(this.brand);
    }
}

let bmw = new Car('BMW - X7', 'Red')

console.log(bmw.info());


class Profile {
    constructor(name,age,education) {
        this.name = name
        this.age = age
        this.education = education
    }

    details() {

        console.log(this.name, this.age, this.education);
        
    }
}

console.log(new Profile('nanda',43,'MCA').details());

let me = Object.create({name:'nanda'})

console.log(me.name);