'use strict'
// selectors
const toggleMenu = document.querySelector('.ham');
const navLinks = document.querySelector('nav .links');
const overlay = document.querySelector('.overlay')
// functions


// event
// ! Menu Responsive 😎
toggleMenu.addEventListener('click', function () {
    navLinks.classList.toggle('off-mobile');
    toggleMenu.classList.toggle('c-white')
    overlay.classList.toggle('show-mobile');
})