'use strict';
(function () {
  var setupElement = document.querySelector('.setup');
  var setupSimilarElement = document.querySelector('.setup-similar');

  var setupOpenElement = document.querySelector('.setup-open');
  var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
  var setupCloseElement = setupElement.querySelector('.setup-close');

  var onCloseSetupEscPress = function (evt) {
    window.utils.onDocumentEscPress(evt, closeSetupElement);
  };

  var onSetupCloseEnterPress = function (evt) {
    window.utils.onDocumentEnterPress(evt, closeSetupElement);
  };

  var onSetupOpenIconEnterPress = function (evt) {
    window.utils.onDocumentEnterPress(evt, openSetupElement);
  };

  var openSetupElement = function () {
    setupElement.classList.remove('hidden');
    setupSimilarElement.classList.remove('hidden');

    window.validation.addValidationHandlers();
    window.playerSetup.addPlayerSetupHandlers();
    document.addEventListener('keydown', onCloseSetupEscPress);
  };

  var closeSetupElement = function () {
    setupElement.classList.add('hidden');

    window.validation.removeValidationHandlers();
    window.playerSetup.removePlayerSetupHandlers();
    document.removeEventListener('keydown', onCloseSetupEscPress);
  };

  var basicHandlers = [
    {element: setupOpenElement,
      eventType: 'click',
      handler: openSetupElement
    },
    {element: setupOpenIconElement,
      eventType: 'keydown',
      handler: onSetupOpenIconEnterPress
    },
    {element: setupCloseElement,
      eventType: 'click',
      handler: closeSetupElement
    },
    {element: setupCloseElement,
      eventType: 'keydown',
      handler: onSetupCloseEnterPress
    }
  ];


  window.utils.runHandlers(basicHandlers, true);
})();
