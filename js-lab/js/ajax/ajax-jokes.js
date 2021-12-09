const URL = 'https://api.chucknorris.io/jokes/random'
const METHOD = 'GET'


const jokeButton = document.getElementById('jokeBtn')
const jokeContainer = document.getElementById('joke');
const pJokeElement = document.createElement('span');

function getJoke() {
    const xhr = new XMLHttpRequest();

    
    return new Promise((res,rej) => {
        xhr.open(METHOD, URL);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status === 200) {
                res(xhr.responseText)
            } else {
                rej({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        }
        
    })
}

jokeButton.addEventListener('click', function (e) {
    
    getJoke().then(data => 
        {   
            const {value} = JSON.parse(data)
            
            pJokeElement.textContent = value;
            pJokeElement.classList.add('joke')
            jokeContainer.appendChild(pJokeElement)
        }
        
        ).catch(data => {console.log(data)})
    

})