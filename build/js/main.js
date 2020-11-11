'use strict';

(function () {
  var cardsList = document.querySelector('.cruises__list');

  if (document.querySelector('.cruises__list')) {

    var allCards = cardsList.querySelectorAll('li');
    var allButtons = cardsList.querySelectorAll('a');

    var getFocus = function (card) {
      card.addEventListener('focus', function () {
        allButtons[i].focus();
        card[i].style = 'opacity: 1';
      });
    };

    for (var i = 0; i < allCards.length; i++) {
      getFocus(allCards[i]);
    }
  }
})();

'use strict';

(function () {
  var form = document.querySelector('form');

  if (document.querySelector('form')) {

    var formName = form.querySelector('.booking__name-wrapper input');
    var formNameErrorMessage = 'Введите ваше имя';

    formName.addEventListener('focus', function () {
      if (formName.value === '') {
        formName.setCustomValidity(formNameErrorMessage);
      } else {
        formName.setCustomValidity('');
      }
    });
  }
})();

'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');

  if (document.querySelector('.main-nav')) {
    var mainNavToggle = document.querySelector('.main-nav__toggle');

    mainNav.classList.remove('main-nav--nojs');

    mainNavToggle.addEventListener('click', function () {
      if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
      } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767 && mainNav.classList.contains('main-nav--opened') === true) {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
      }
    });
  }
})();
