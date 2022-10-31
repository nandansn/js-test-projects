let h1El = document.querySelector('h1')
let h2El = document.querySelector('h2')
let h3El = document.querySelector("h3");

let btnEl = document.getElementById('btn')

btnEl.addEventListener('click', async () => {
    await changeColor(2000).then((d) => {
        h1El.style.color = "red"
    })
    await changeColor(4000).then((d) => {
      h2El.style.color = "green";
    });
    await changeColor(6000).then((d) => {
      h3El.style.color = "blue";
    });
})


function changeColor(time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, time);
    })
    
}