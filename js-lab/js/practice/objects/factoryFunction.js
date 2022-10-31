function createPerson(name, age) {
    return {
        name:name,
        age:age,
        info: function () {
            console.log(this.name);
            console.log(this.age);
        }
    }
}

let nanda = createPerson('nanda',40)
let kumar = createPerson('kumar',25)

nanda.info();