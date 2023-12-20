function pintar(color = 'green'){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar)





/*
function pintar(color = 'green'){
    
    switch (color){
        case 'yellow':
            ele.style.backgroundColor = 'yellow'
        default:
            ele.style.backgroundColor = 'green'
    }
}

const ele = document.getElementById("container")
ele.addEventListener("click", pintar)
*/

// const cuadro = document.getElementById("container")
// cuadro.addEventListener('click', ()=>{
//     if (cuadro.style.backgroundColor == ''){
//         cuadro.style.backgroundColor = 'green'
//     } else {
//         pintar()
//     }
// })



/*
const cuadroColor = document.getElementById("container")
switch (cuadroColor){
    case 'yellow':
        cuadro.style.backgroundColor('yellow')
        break
    default:
        cuadro.style.backgroundColor('green')
}

const ele = document.getElementById("container")
ele.addEventListener("click", switch())
*/