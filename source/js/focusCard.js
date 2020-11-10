'use strict';

(function () {
  var cardsList = document.querySelector('.cruises__list');
  var allCards = Array.from(cardsList.querySelectorAll('li'));
  var allButtons = Array.from(cardsList.querySelectorAll('a'));

  var focusButton = function (cards,buttons) {
    cards.addEventListener('focus', function () {
      buttons.focus();
    })
  }

  for (var i = 1; i < allCards.length -1; i++) {
    focusButton(allCards[i],allButtons[i]);
  }
})();