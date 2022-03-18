const person = {
    fname:'nanda',
    age:40,
    companies:['oracle','epam','paypal'],
    married:true,
}


const employee = {
    name:'nanda',
    address: {
        street:'9065 Hamilton avenue',
        city:'sanjose',
        'social-contact': {
            gmail:'abc@gmail.com'
        }
    },
    info: function () {
        console.log(`${this.name} ${JSON.stringify(this.address)}`);
    }
}


employee.info();