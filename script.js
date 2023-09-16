'use strict'
// selectors
const toggleMenu = document.querySelector('.ham');
const navLinks = document.querySelector('nav .links');
const overlay = document.querySelector('.overlay')
// functions


// events
toggleMenu.addEventListener('click', function () {
    navLinks.classList.toggle('off-mobile');
    overlay.classList.toggle('show-mobile');
})