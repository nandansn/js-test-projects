// spread string

let baby = 'nivrithi...'

let chars = [...baby]

console.log(chars)

// spread arrays

let gals = ['a','b','c']
let boys = ['h','j','k']

let [one,,three] = [...gals]
let [,two,] = [...boys]

let bfs = [one,two,three]

let all = [...boys,...gals,...bfs]

console.log(all)


// spread objects

let person = {name:'nanda',age:40,contact:{mobile:100,mail:'nan@123.com'}}

let {name,age,mobile,city} = {...person,...person.contact, city:'erode'}

let newPerson = {...person,...person.contact, city:'erode'}

console.log(name,age,mobile,city)
console.log(newPerson)