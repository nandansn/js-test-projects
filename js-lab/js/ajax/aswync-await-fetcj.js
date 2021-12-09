const URL = 'https://api.chucknorris.io/jokes/random'
const METHOD = 'GET'


const jokeButton = document.getElementById('jokeBtn')
const jokeContainer = document.getElementById('joke');
const pJokeElement = document.createElement('span');

async function  getJoke() {
    try {
        const data = await fetch(URL);
        const response = await data.json();
        displayJoke(response)
        
    } catch (error) {
        console.log(error)
        displayJoke(error)
    }
}

function displayJoke({value, error}) {
        pJokeElement.textContent = value;
        if (error) {
            pJokeElement.textContent = error
        }
        pJokeElement.classList.add('joke')
        jokeContainer.appendChild(pJokeElement)
    
}

jokeButton.addEventListener('click', function (e) {
    
    getJoke();
    

})