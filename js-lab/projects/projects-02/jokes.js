const url = "https://icanhazdadjoke.com/";


let btn = document.getElementById('j-btn')
let pEl = document.getElementById('joke')

btn.addEventListener('click', async () => {
  pEl.textContent = "Loading..."

  try {
    let response = await fetch(url, {
      headers: {
        method: "GET",
        Accept: "application/json",
        mode:"no-cors"
      },
    });

    if (!response.ok) {
      throw new Error("api request error")
    }
    let data = await response.json();

    pEl.textContent = data.joke;
    
  } catch (error) {
    console.log(error);
    pEl.textContent = "error";
  }

  

})