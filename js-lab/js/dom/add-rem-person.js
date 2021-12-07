const nameText = document.getElementById('fname')

const addBtn = document.getElementById('add')

const message = document.getElementById('message')

function validate() {

    if (nameText.value === "" || String.nameText.value.length) {
        message.classList.add('error')
        const error = document.createElement('span')
        error.textContent = "Enter Name"
        message.appendChild(error)
    }
    
}

function addName() {
    validate();
    const liElement = document.createElement('li')
    liElement.textContent = nameText.value;
    
    document.getElementById('p-list').appendChild(liElement)
}



addBtn.addEventListener('click', addName)