let person_1 = {
    name:'nanda',
    job:'sde',
    info: function () {
        console.log(this.name, this.job)
    }
}


person_1.info()