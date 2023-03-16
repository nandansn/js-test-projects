const nameText = document.getElementById('fname')

const addBtn = document.getElementById('add')

const message = document.getElementById('message')

const error = document.createElement('span')

function validate() {

    if (nameText.value === "") {
        message.classList.add('error')
        error.textContent = "Enter Name"
        message.appendChild(error)
        return false;
    } else {
        error.textContent = ""
        return true;
    }
    
}

function addName() {
    if (validate()) {
    const liElement = document.createElement('li')
    liElement.textContent = nameText.value;
    
    document.getElementById('p-list').appendChild(liElement)
    }
}



addBtn.addEventListener('click', addName)