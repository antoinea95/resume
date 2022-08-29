// Toggle pour la navigation mobile

// Selection du picto burger
const toggleNav = document.querySelector(".header--burger");

// affichage de la nav au clique de l'utilisateur
toggleNav.addEventListener("click", switchToggle);

// function affichant le menu navigation
function switchToggle() {
  const nav = document.querySelector(".header--nav");
  const navOn = document.querySelector(".header--navOn");

  // ajout de la classe navon et remplacement par un picto croix pour fermer la nav
  nav.classList.add("header--navOn");
  toggleNav.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // si la nav est deja affiché, suppression de la class navon et affichae du picto burger
  if (navOn) {
    nav.classList.remove("header--navOn");
    toggleNav.innerHTML = ' <i class="fa-solid fa-bars"></i>';
  }
}

// Function pour le slider de la partie présentation
const items = document.querySelectorAll(".item");
const numbersOfSlide = items.length;
const next = document.querySelector(".slider--btn__next");
const previous = document.querySelector(".slider--btn__previous");
let count = 0;

// function pour afficher l'item suivant
function nextSlide() {
  // supression de la class active de l'item affiché
  items[count].classList.remove("active");

  // s'il reste encore des slides, itération de la variable count si non remise à 0
  if (count < numbersOfSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  // ajout de la class active pour l'item suivant
  items[count].classList.add("active");
}
next.addEventListener("click", nextSlide);

// function pour afficher l'item précédent
function previousSlide() {
  // supression de la class active de l'item affiché
  items[count].classList.remove("active");

  // si count est supérieur à 0, on diminue sa valeur de 1 si non count = index du dernier élément du tableau
  if (count > 0) {
    count--;
  } else {
    count = numbersOfSlide - 1;
  }

  //ajout de la classe active pour l'item précédent
  items[count].classList.add("active");
}
previous.addEventListener("click", previousSlide);

// Gestion de l'affichage du détail des projets

// récupération de tout les toggles de la partie projet
const allToggle = document.querySelectorAll(".projects--item__toggle");

// itération du tableau: pour chaque toggle ajout d'un event listener
for (let i = 0; i < allToggle.length; i++) {
  allToggle[i].addEventListener("click", () => {
    const content = document.querySelectorAll(".projects--item__content");

    // au clique ajout de la classe contentOn pour afficher les détails et affichage du pictogramme -
    content[i].classList.toggle("projects--item__contentOn");
    allToggle[i].innerHTML = '<i class="fa-solid fa-minus"></i>';

    // si la classe contentOn est absente on affiche le pictogramme +
    if (content[i].classList.value === "projects--item__content") {
      allToggle[i].innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
  });
}
