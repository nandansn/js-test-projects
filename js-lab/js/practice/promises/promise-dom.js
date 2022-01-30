const h1El = document.getElementById("h1");
const h2El = document.getElementById("h2");
const h3El = document.getElementById("h3");
const h4El = document.getElementById("h4");


const clrBtn = document.getElementById("clr-btn")

// const changeColor = (el,color) => {
//     el.style.color = color;
// }

// clrBtn.addEventListener('click', () => {
//     setTimeout(()=> {
        
//         setTimeout(() => {
//             changeColor(h2El,'green')
//             setTimeout(() => {
//                 changeColor(h3El,'blue')
//             },2000)
//         },1000)
//         changeColor(h1El,'red')
//     }, 3000)
    
// })

const changeColor = (element, color, timeout) => {

    return new Promise((res, rej) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
            }, timeout)
            res('color changed')
        }
        else {
            rej(new Error('element not present'))
        }
    })
    
}

clrBtn.addEventListener('click',() => {
    changeColor(h1El, 'red', 2000).then(() => {
        changeColor(h2El, 'green', 4000)
    }).then(() => {
        changeColor(h3El, 'blue', 1000)
    }).then(() => {
        changeColor(h4El, 'blue', 6000)
    }).catch((err) => {
        console.log(err)
    })
})

