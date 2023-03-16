const str = `hello world
hello this is a multi-line string
that starts and ends with hello`;

const regex = /^\bhello\b/g;
const matches = str.match(regex);



console.log(matches);


let s = str.replace(/^\bhello\b/gmi, "nanda$&")

console.log(s);
