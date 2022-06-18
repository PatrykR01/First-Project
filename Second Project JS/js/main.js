const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const changeColor = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20;

function up() {
    fontSize+=5
    p.style.fontSize = fontSize + 'px'
}

function down () {
    fontSize-=5
    p.style.fontSize = fontSize + 'px'
}

function colorChange() {
    p.style.color = 'green'
}

changeColor.addEventListener('click', colorChange)
sizeUp.addEventListener('click', up)
sizeDown.addEventListener('click', down)