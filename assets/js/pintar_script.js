const ele = document.getElementById("ele1")
const pintar = function(color = 'green'){
    
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar)



