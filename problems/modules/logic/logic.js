let personList =  function getPersonList(persons) {
    let personList = persons.map(person => {
        return `<li>My name is <b>${person.fname}</b>, age is ${person.age}</li>`
    }).join('')
    return personList
}

export default personList;

