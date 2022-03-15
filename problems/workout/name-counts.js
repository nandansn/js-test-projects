const names = ['a','b','c','a','e','e']

let counter = []

let nameSet = new Set();

for (const name of names) {

    if (nameSet.has(name)) {
        for (const count of counter) {
            if (count.char === name) {
                count.count += 1;
            }
        }
    } else {
        nameSet.add(name)
        counter.push({char:name, count:1})
    }
    
}

console.log(counter);