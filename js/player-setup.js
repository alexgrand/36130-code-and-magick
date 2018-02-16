'use strict';
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var setupWizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

  var changeWizardDetails = function (evt) {
    var element = evt.target;
    if (element.classList.contains('setup-fireball')) {
      element = element.parentNode;
      element.style.backgroundColor = window.utils.getRandomValue(FIREBALL_COLORS);
    } else if (element.classList.contains('wizard-coat')) {
      element.style.fill = window.utils.getRandomValue(COAT_COLORS);
    } else if (element.classList.contains('wizard-eyes')) {
      element.style.fill = window.utils.getRandomValue(window.data.wizardEyes);
    }
  };

  var playerSetupHandlers = [
    {element: wizardCoatElement,
      eventType: 'click',
      handler: changeWizardDetails
    },
    {element: wizardEyesElement,
      eventType: 'click',
      handler: changeWizardDetails
    },
    {element: wizardFireballElement,
      eventType: 'click',
      handler: changeWizardDetails
    }
  ];

  window.playerSetup = {
    addPlayerSetupHandlers: function () {
      window.utils.runHandlers(playerSetupHandlers, true);
    },
    removePlayerSetupHandlers: function () {
      window.utils.runHandlers(playerSetupHandlers, false);
    }
  };
})();
