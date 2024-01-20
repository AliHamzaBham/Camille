
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".container");
window.addEventListener("scroll", fixNav);

const logoLink = document.querySelector('.logo_link');
const searchIcon = document.querySelector('.search-icon');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

function fixNav() {
    if (window.scrollY > 0) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Mobile Navigation

const navList = document.querySelector('.nav');
const mobileNavList = document.querySelector('.mobile-nav');


mobileNavList.classList.add('side-hide');
mobileNavList.classList.remove('side-show');
menuIcon.addEventListener('click', () => {
    navList.classList.add('to-hide');
    mobileNavList.classList.remove('to-hide');
    mobileNavList.classList.add('side-show');
    mobileNavList.classList.remove('side-hide');
})

mobileMenuIcon.addEventListener('click', () => {
  navList.classList.remove('to-hide');
  mobileNavList.classList.add('side-hide');
    mobileNavList.classList.remove('side-show');
});


// Team

$('.team-slider').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
  margin: 20,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      991: {
          items: 3
      },
      1200: {
          items: 3
      },
      1920: {
          items: 3
      }
  }
});