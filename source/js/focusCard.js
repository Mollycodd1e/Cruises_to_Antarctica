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
