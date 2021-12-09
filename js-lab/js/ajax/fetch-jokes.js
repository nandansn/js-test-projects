const URL = 'https://api.chucknorris.io/jokes/random'
const METHOD = 'GET'


const jokeButton = document.getElementById('jokeBtn')
const jokeContainer = document.getElementById('joke');
const pJokeElement = document.createElement('span');

function getJoke() {
    fetch(URL).then(data => data.json()).then(res => displayJoke(res)).catch(err => console.log(err))
}

function displayJoke({value}) {
        pJokeElement.textContent = value;
        pJokeElement.classList.add('joke')
        jokeContainer.appendChild(pJokeElement)
    
}

jokeButton.addEventListener('click', function (e) {
    
    getJoke();
    

})