function unique() {

    let uniqueNames = []

    strings.forEach(name => {
        if (uniqueNames.includes(name)) {

        } else {
            uniqueNames.push(name)
        }
    })

    return uniqueNames;
  
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O
