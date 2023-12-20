function changeBg(idSquare){
    elemento = document.getElementById(idSquare)
    elemento.style.backgroundColor = 'black'
}

document.addEventListener("keydown", function(event){
    if (event.key === 'a'){
        pink()
    } else if (event.key === 's'){
        orange()
    } else if (event.key === 'd'){
        skyblue()
    }
})

function pink(){
    cuadro = document.getElementById('key')
    cuadro.style.backgroundColor = 'pink'
}

function orange(){
    cuadro = document.getElementById('key')
    cuadro.style.backgroundColor = 'orange'
}

function skyblue(){
    cuadro = document.getElementById('key')
    cuadro.style.backgroundColor = 'skyblue'
}

document.addEventListener("keydown", function(event){
    if (event.key === 'q'){
        addSquarePurple()
    } else if (event.key === 'w'){
        addSquareGray()
    } else if (event.key === 'e'){
        addSquareBrown()
    }
})


function addSquarePurple(){
    contenedor = document.getElementById('container')
    newElement = document.createElement("div")
    newElement.style.backgroundColor = "purple"
    newElement.style.height = "200px"
    newElement.style.width = "200px"
    newElement.style.border = "3px solid black"
    contenedor.appendChild(newElement)
}

function addSquareGray(){
    contenedor = document.getElementById('container')
    newElement = document.createElement("div")
    newElement.style.backgroundColor = "gray"
    newElement.style.height = "200px"
    newElement.style.width = "200px"
    newElement.style.border = "3px solid black"
    contenedor.appendChild(newElement)
}

function addSquareBrown(){
    contenedor = document.getElementById('container')
    newElement = document.createElement("div")
    newElement.style.backgroundColor = "brown"
    newElement.style.height = "200px"
    newElement.style.width = "200px"
    newElement.style.border = "3px solid black"
    contenedor.appendChild(newElement)
}

