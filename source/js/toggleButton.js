'use strict';

var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');
var logo = document.querySelector('.main-nav__logo-image');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    logo.src = 'img/logo-black.png';
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    logo.src = 'img/logo-desktop.png';
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 767 && mainNav.classList.contains('main-nav--opened') === true) {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    logo.src = 'img/logo-desktop.png';
  }
});
