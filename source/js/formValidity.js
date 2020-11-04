'use strict';

var form = document.querySelector('.booking__form');
var formName = form.querySelector('.booking__input-name');

formName.onfocus = function () {
  if (formName.value === '') {
    formName.setCustomValidity('Введите ваше имя');
  } else {
    formName.setCustomValidity('');
  }
};
