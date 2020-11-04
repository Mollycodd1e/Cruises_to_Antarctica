'use strict';

var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');
var logo = document.querySelector('.main-nav__logo-image');
var mobileLogo = document.querySelector('.main-nav__logo-mobile');

mainNav.classList.remove('main-nav--nojs');

var whiteLogo = function () {
  logo.src = 'img/logo-desktop.png';
  mobileLogo.srcset = 'img/logo-desktop.png';
};

var blackLogo = function () {
  logo.src = 'img/logo-black.png';
  mobileLogo.srcset = 'img/logo-black.png';
};

whiteLogo();

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    blackLogo();
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    whiteLogo();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 767 && mainNav.classList.contains('main-nav--opened') === true) {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    whiteLogo();
  }
});
