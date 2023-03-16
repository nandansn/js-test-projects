let fname = 'nanda'
let lname = 'kumar'
let city = 'erode'

let textTamplate = info`my firt name is ${fname}, last name is ${lname}. from the place ${city}`;

function info(text, ...vars) {
    let completeText = text.map((textItem, index) => {
        return textItem + (vars[index] || "");
    }).join('');

    console.log(completeText);
}


