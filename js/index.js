const toggleNav = document.querySelector('.header--burger');
toggleNav.addEventListener('click', switchToggle)

function switchToggle () {
    const nav = document.querySelector('.header--nav')
    const navOn = document.querySelector('.header--navOn')

    nav.classList.add('header--navOn')
    toggleNav.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    if(navOn) {
        nav.classList.remove('header--navOn');
        toggleNav.innerHTML = ' <i class="fa-solid fa-bars"></i>'
    }
   
}


const items = document.querySelectorAll('.item');
const numbersOfSlide = items.length;
const next = document.querySelector('.slider--btn__next');
const previous = document.querySelector('.slider--btn__previous');
let count = 0;

function nextSlide() {
    items[count].classList.remove('active');

    if(count < numbersOfSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
}

next.addEventListener('click', nextSlide);

function previousSlide() {

    items[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = numbersOfSlide - 1;
    }

    items[count].classList.add('active');
}

previous.addEventListener('click', previousSlide);









