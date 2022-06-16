const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.remove-color')
const div = document.querySelector('.color')

function redColor () {
    div.classList.add('red')
    div.classList.remove('blue')
}

function blueColor () {
    div.classList.add('blue')
    div.classList.remove('red')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)

function deleteColor () {
    div.classList.remove('red')
    div.classList.remove('blue')
}

btn3.addEventListener('click', deleteColor)