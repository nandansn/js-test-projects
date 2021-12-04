const markContainer = document.querySelector('#marks-table')

markContainer.style.background='red'

const markRows = document.querySelectorAll('table tr')

console.log(markRows)

markRows.forEach(row => {

    const element = document.createElement('td')
    element.innerText='nanda'

    row.appendChild(element)
})