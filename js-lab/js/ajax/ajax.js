



const xhr = new XMLHttpRequest();

function getText() {
    const url = './sample.txt'
    const method = "GET"
    
    xhr.open(method, url)
    console.log(xhr.status);
    xhr.onload = function () {
        if (xhr.status === 200) {
            newPara.textContent = xhr.responseText
            containerDiv.appendChild(newPara)
        } else {
            console.log(xhr)
            newPara.className = 'warn'
            newPara.textContent = `${xhr.status} - ${xhr.statusText}`
            containerDiv.appendChild(newPara)
        }
    }
    xhr.send();

}

function getPerson() {
    const url = './person.json'
    const method = "GET"
    
    xhr.open(method, url)
    console.log(xhr.status);
    xhr.onload = function () {
        if (xhr.status === 200) {

            const persons = JSON.parse(xhr.responseText)
            if (containerDiv.getElementsByTagName('ul').length > 0) {
                containerDiv.removeChild('ul')
            }
            
            let personList = document.createElement('ul')
            persons.map(item => {

                let liItem = document.createElement('li')
                liItem.textContent = item.name;
                personList.appendChild(liItem)

            })
            
            containerDiv.appendChild(personList)
        } else {
            console.log(xhr)
            newPara.className = 'warn'
            newPara.textContent = `${xhr.status} - ${xhr.statusText}`
            containerDiv.appendChild(newPara)
        }
    }
    xhr.send();

}

const containerDiv = document.getElementById('container')
const newPara = document.createElement('p')



const btn = document.getElementById('txt')
btn.addEventListener('click', function (e) {
    getText();
})

const btnPerson = document.getElementById('person')
btnPerson.addEventListener('click', function (e) {
    getPerson();
})

