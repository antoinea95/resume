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


const allToggle = document.querySelectorAll('.projects--item__toggle');

function showProject() {
    const content = document.querySelectorAll('.projects--item__content');
    const contentOn = document.querySelector('.projects--item__contentOn');

    console.log(content)
   

}

for(let i= 0; i < allToggle.length; i++) {
    let show = false;
    allToggle[i].addEventListener('click', () => {
        
       const content = document.querySelectorAll('.projects--item__content');
       const contentOn = document.querySelector('.projects--item__contentOn');

        content[i].classList.toggle('projects--item__contentOn');
        allToggle[i].innerHTML = '<i class="fa-solid fa-minus"></i>';

        console.log(content[i].classList)

        if(content[i].classList.value === ('projects--item__content')) {
            allToggle[i].innerHTML = '<i class="fa-solid fa-plus"></i>';
        }
       
        
    


    })
}


//projectToggle.innerHTML = ' <i class="fa-solid fa-plus"></i>'
//projectToggle.innerHTML = '';





