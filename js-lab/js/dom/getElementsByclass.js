const booksList = document.getElementsByClassName('item')

// booksList.forEach(book => {
//     book.style.color ='red'
// })

Array.from(booksList).forEach(book => {
    book.style.color ='red'
})

