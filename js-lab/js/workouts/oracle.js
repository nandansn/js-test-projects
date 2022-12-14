let n = "nandakumar"

// split chars
// use map to add the element if false print the char

let counter = new Map()

let chars = [...n]

chars.forEach(c => {

    if (counter.has(c)) {
        console.log(c);
    } else {
        counter.set(c,1)
    }
})