function Person(name,age,sex) {
    this.name = name,
    this.age = age,
    this.info = function () {
        console.log(JSON.stringify(this));
    }
}

new Person('nanda',40,'M').info();