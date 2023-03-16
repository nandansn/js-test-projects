const headers = document.getElementsByTagName('h2')

const headerElements = Array.from(headers)

headerElements.forEach(header => {
    header.style.color = 'red'
})