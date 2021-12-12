const names = [
    'nanda','sanmathi','nivirithi'
]

const messageEl = document.getElementById('msg')
const nxtBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

messageEl.innerText = names[0]

function slider() {
    let index = 0;
    let len =  names.length;
    let checkindex =  function () {
        if (index < 0 ) {
            document.getElementById('prev').setAttribute("disabled","disabled")
        }
        if (index === len) {
            document.getElementById('next').setAttribute("disabled","disabled")
        }
    }
    
    return {
        prev: function prev() {
            
            
            console.log(names[--index])
            checkindex();
            
        },
        next: function () {
            console.log(names[index++])
            checkindex();
        },
    }
}

let sliders = slider();

nxtBtn.addEventListener('click', sliders.next)
prevBtn.addEventListener('click', sliders.prev)