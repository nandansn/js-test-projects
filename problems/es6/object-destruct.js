let person = {
    name:'nanda',
    age:40,
    address : {
        contact: {
            phone:1234,
            mail:'abc@gmail.com'
        }
    }
}

let {name:fname,age:page, address: {contact: { phone : ph}  } } = person;

console.log(fname,page,ph);