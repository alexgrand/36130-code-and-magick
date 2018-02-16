'use strict';
(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;
  var WARNING_SHORT_NAME = 'Имя должно состоять минимум из двух символов!';
  var WARNING_LONG_NAME = 'Имя не должно превышать 25 символов!';
  var WARNING_REQUIRED = 'Это поле обязательно!';

  var userNameElement = document.querySelector('.setup-user-name');
  var onUserNameInvalid = function (evt) {
    var nameInput = evt.target;

    if (nameInput.validity.tooShort) {
      nameInput.setCustomValidity(WARNING_SHORT_NAME);
    } else if (nameInput.validity.tooLong) {
      nameInput.setCustomValidity(WARNING_LONG_NAME);
    } else if (nameInput.validity.valueMissing) {
      nameInput.setCustomValidity(WARNING_REQUIRED);
    } else {
      nameInput.setCustomValidity('');
    }
  };

  var onUserNameInput = function (evt) {
    var nameInput = evt.target;
    if (nameInput.value.length < MIN_NAME_LENGTH) {
      userNameElement.setAttribute('pattern', '.{' + MIN_NAME_LENGTH + ',' + MAX_NAME_LENGTH + '}');
      userNameElement.setAttribute('title', WARNING_SHORT_NAME);
    }
  };
  var validationHandlers = [
    {element: userNameElement,
      eventType: 'invalid',
      handler: onUserNameInvalid
    },
    {element: userNameElement,
      eventType: 'input',
      handler: onUserNameInput
    }
  ];

  window.validation = {
    addValidationHandlers: function () {
      window.utils.runHandlers(validationHandlers, true);
    },
    removeValidationHandlers: function () {
      window.utils.runHandlers(validationHandlers, false);
    }
  };

})();
