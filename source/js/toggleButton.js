'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');

  if (document.querySelector('.main-nav')) {
    var mainNavToggle = document.querySelector('.main-nav__toggle');
    var logo = document.querySelector('.main-nav__logo img');
    var whiteLogoDesktop = 'img/logo-desktop.png';
    var whiteLogoDesktopRetina = 'img/logo-desktop@2x.png';
    var blackLogo = 'img/logo-black.png';
    var blackLogoRetina = 'img/logo-black@2x.png';

    mainNav.classList.remove('main-nav--nojs');

    var changeOnWhiteLogo = function () {
      logo.src = whiteLogoDesktop;
      logo.srcset = whiteLogoDesktopRetina;
    };

    var changeOnBlackLogo = function () {
      logo.src = blackLogo;
      logo.srcset = blackLogoRetina;
    };

    changeOnWhiteLogo();

    mainNavToggle.addEventListener('click', function () {
      if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
        changeOnBlackLogo();
      } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        changeOnWhiteLogo();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767 && mainNav.classList.contains('main-nav--opened') === true) {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        changeOnWhiteLogo();
      }
    });
  }
})();
