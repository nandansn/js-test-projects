function createPerson(fName, lName, age) {
    return {
        fName,
        lName,
        age,
        info: function () {
            console.log(JSON.stringify(this));
        }
    }
}


let p1 = createPerson('nanda','kumar', 40)
p1.info();