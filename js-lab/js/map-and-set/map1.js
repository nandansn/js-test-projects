// adding duplicate object

let personsMap = new Map()

let p1 = {name:'nanda'}
let p2 = {name:'kumar'}

personsMap.set(p1,123)
personsMap.set(p1,456)

let mapEntries = personsMap.entries();


for (const entry of mapEntries) {
    console.log(entry)
}



let person = {
    name:'nanda',
    age:'41',
    location:'erode'
}

let pMap = new Map(Object.entries(person));

for (const iterator of pMap) {
    console.log(iterator)
}

let newPerson = Object.fromEntries(pMap)

console.log(newPerson)