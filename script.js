'use strict'
// selectors
const overlay = document.querySelector('.overlay');
const header = document.querySelector('header')
//  Menu selectors 
const toggleMenu = document.querySelector('.ham');
const navLinks = document.querySelector('nav .links');
//  Modal window Selectors
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// functions


// event
// ! Menu Responsive 😎
const openMenu = function () {
    navLinks.classList.remove('off-mobile');
    toggleMenu.classList.add('c-white');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
const closeMenu = function () {
    navLinks.classList.add('off-mobile');
    toggleMenu.classList.remove('c-white');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';

}
let opened = false;
const toggleMenuFun = () => {
    if (opened) closeMenu();
    else openMenu();
    opened = !opened;
}
toggleMenu.addEventListener('click', toggleMenuFun);
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')
        || e.target.classList.contains('nav_link') && !navLinks.classList.contains('off-mobile'))
        closeMenu();
});
// ! Modal Window 🪟


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    overlay.classList.remove('show-mobile');
    document.body.style.overflow = 'hidden';
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();

    if (e.key == 'Escape' && !navLinks.classList.contains('off-mobile'))
        closeMenu();

});

//creating
// Add cookie Message 🍪🍪🍪
// ! First Create it 
const cookieMessage = document.createElement('div');
cookieMessage.innerHTML = `We Use Cookie🍪 for Improved Functionality and analytics <button class='btn btn--close--cookie'>Got It</button>`
cookieMessage.classList.add('cookie-message')
// console.log(cookieMessage);
// ! Then Insert it at header
//  insertAdjacentHtml [before begin, after begin, before end, after end]
// header.insertAdjacentElement('beforeend', cookieMessage)
//   you can also use these methods [before, prepend, append, after]
header.append(cookieMessage);
// ! removing it  on click
document.querySelector('.btn--close--cookie')
    .addEventListener('click', function () {
        cookieMessage.remove();
    })

//   Style
// it is an inline style
cookieMessage.style.backgroundColor = '#37383d';

// console.log(cookieMessage.style.height);
// will print nothing because height is not inline style
// solution ⭐⭐⭐ getComputed
// console.log(getComputedStyle(cookieMessage).height);


cookieMessage.style.height =
    Number.parseFloat(getComputedStyle(cookieMessage).height)
    + 30 + 'px';

//  setProperty 
// document.documentElement.style.setProperty('--color-primary', 'red');

const logo = document.querySelector('.logo')

// Attributes 
console.log(logo.className);
// non-standard
console.log(logo.nonStandard);// undefined

// getAttribute => returns it as written in html
console.log(logo.getAttribute('non-standard'));// will get easily
// dataset
console.log(logo.dataset.version);// data-version



//  Learn More smooth scroll
const featuresSection = document.querySelector('#features');
const btnScroll = document.querySelector('.btn-scroll');
btnScroll.addEventListener('click',
    function (e) {
        e.preventDefault();
        const featuresCord = featuresSection.getBoundingClientRect();
        // console.log(featuresCord);
        // !Old School Method
        // window.scrollTo(
        //     {
        //         left: featuresCord.left + window.pageXOffset,
        //         top: featuresCord.top + window.pageYOffset,
        //         behavior: 'smooth',
        //     }
        // );
        // ! Easier 
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    })