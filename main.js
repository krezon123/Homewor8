// Домашняя работа на 8 урок

// let button = document.querySelector('.button')
// let element = document.querySelector('.element')

// button.onclick = function(){
//     element.classList.add('element1')
// }



// let button = document.querySelector('.button')
// let element = document.querySelector('.element')

// button.onclick = function(){
//     element.classList.add('element1')
//     element.classList.add('element2')
//     element.classList.add('element3')
// }



let button = document.querySelector('.button')
let element = document.querySelector('.element')

button.onclick = function(){
    element.classList.add('element1')
    element.classList.add('element2')
    element.classList.add('element3')

    element.classList.remove('element2')
}