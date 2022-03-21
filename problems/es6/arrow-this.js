let createPerson = function (name,age) {
    
    return  {
        name,
        age,
        
        // info:  () => {
        //     console.log(`${this.name}, ${this.age}`); /
        // }
        // this is not available in the surrounding scope

    }
}


let person = {
    name:'nanda',
    

    info:function () {
        console.log(this);
        setTimeout(() => {
            console.log(this.name)
        },2000)
    },

    regular : function () {
        setTimeout(function () {
            console.log(this.name);
        },2000)
    }
}

person.info();

person.regular();

function outSide() {
    self = this;
    setTimeout(function () {
        console.log(this.name); // this refers to the parent of the function
        console.log(self.name);
    },2000)
}

outSide.call(person)