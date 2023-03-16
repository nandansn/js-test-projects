import { persons } from "./data/data.js";

import getPerson  from "./logic/logic.js"; // without curly braces.


let ulElement = document.getElementById('person-list')
let showButton = document.getElementById('btn-show')



showButton.addEventListener('click', function () {
    ulElement.innerHTML = getPerson(persons)
})

console.log(persons);