// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const ulElement = document.querySelector('ul.links')

const ulClasses = ulElement.classList;


const toggleBtnElement = document.querySelector('.nav-toggle')

toggleBtnElement.addEventListener('click', function () {
   if ( ulClasses.contains('show-links') ) {
        ulClasses.remove('show-links')
    } else {
        ulClasses.add('show-links')
    }

    ulElement.setAttribute('class',ulClasses)
})

