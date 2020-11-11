'use strict';

(function () {
  var cardsList = document.querySelector('.cruises__list');

  if (document.querySelector('.cruises__list')) {

    var allCards = cardsList.querySelectorAll('li');
    var allButtons = cardsList.querySelectorAll('a');
    var allDescription = cardsList.querySelectorAll('.description');

    var getFocus = function (card, button, description) {
      card.addEventListener('focus', function () {
        card.setAttribute('tabindex', '-1');
        description.style = 'opacity: 1';
        button.focus();
      });

      button.addEventListener('blur', function () {
        card.setAttribute('tabindex', '0');
        description.style = 'opacity: 0';
        button.blur();
      });
    };

    for (var i = 0; i < allCards.length; i++) {
      getFocus(allCards[i], allButtons[i], allDescription[i]);
    }
  }
})();
