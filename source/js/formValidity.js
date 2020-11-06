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
