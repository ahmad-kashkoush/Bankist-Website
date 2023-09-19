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
document.querySelector('header .hero ').append(cookieMessage);
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




//  
// If you clicked 

// 🔗🔗🔗 Page Navigation My code
// document.querySelectorAll('nav .links li a').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         //  select element I want to scroll to

//         const sec = document.querySelector(this.getAttribute('href'))
//         sec.scrollIntoView({ behavior: 'smooth' });
//     })
// })
//  In the above code you've create a function for each element which will fuck the performance
// sol : Event Delegation ⭐⭐⭐
navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav_link')) {
        const sec = document.querySelector(e.target.getAttribute('href'))
        sec.scrollIntoView({ behavior: 'smooth' });
        console.log('Love Event Delegation');
    }
})

// Operations tab ⭐⭐⭐⭐
// get buttons using event delegation 
document
    .querySelector('.operations__tab-container')
    .addEventListener('click', function (e) {
        const clicked = e.target.closest('.operations__tab');// so If I clicked on child I get the tab also
        if (!clicked) return;

        const curContentActive = document.querySelector('.operations .operations__content--active');
        const curTabActive = clicked.parentNode.querySelector('.operations__tab--active');
        const targetContentActive = curContentActive.parentNode.querySelector(`.operations__content--${clicked.dataset.tab}`);
        if (clicked !== curTabActive) {
            curContentActive.classList.remove('operations__content--active')
            curTabActive.classList.remove('operations__tab--active')
            targetContentActive.classList.add('operations__content--active')
            clicked.classList.add('operations__tab--active')

        }

    });
//  Menu fading when hover on one of the links
const changeOpacity = function (e, opacity) {
    if (e.target.classList.contains('nav_link')) {
        const targetLink = e.target;
        const siblings = targetLink.closest('.links').querySelectorAll('a');
        const logo = targetLink.closest('.container').querySelector('img');
        logo.style.opacity = this;
        siblings.forEach((link) => {
            if (link !== targetLink) link.style.opacity = this;
        })
    }

}
document.querySelector('nav .container')
    .addEventListener('mouseover', changeOpacity.bind(.5));

document.querySelector('nav .container')
    .addEventListener('mouseout', changeOpacity.bind(1));


// LEC ## Dom Traversing 
// const h1 = document.querySelector(".hero .container h1");
// // DownWards select childs
// // for direct children only
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "orangered";
// h1.lastElementChild.style.color = "blue";
// // upwards for parent
// console.log(h1.parentElement);

// [...h1.parentElement.children].forEach(ele => {
//     if (ele !== h1) {
//         ele.style.backgroundColor = "#262a33";
//         console.log("hello");
//     }
// })
//  setProperty 
// document.documentElement.style.setProperty('--color-primary', 'red');

// const logo = document.querySelector('.logo')

// // Attributes 
// console.log(logo.className);
// // non-standard
// console.log(logo.nonStandard);// undefined

// // getAttribute => returns it as written in html
// console.log(logo.getAttribute('non-standard'));// will get easily
// // dataset
// console.log(logo.dataset.version);// data-version
//