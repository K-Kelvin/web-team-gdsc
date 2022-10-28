var btn = document.getElementById('btn')
var home = document.getElementById('home')

const colors = ["red", "blue", "orange", "yellow", "pink"];

function onBtnClick(){
    // alert("Button clicked!")
    let index = Math.floor(Math.random() * colors.length)
    home.style.backgroundColor = colors[index]
}

btn.onclick = onBtnClick
