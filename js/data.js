'use strict';
(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var NUMBER_OF_WIZARDS = 4;
  var allWizards = [];

  var createWizard = function () {
    return {
      name: window.utils.getRandomValue(NAMES) + ' ' + window.utils.getRandomValue(LASTNAMES),
      coatColor: window.utils.getRandomValue(COAT_COLORS),
      eyesColor: window.utils.getRandomValue(EYES_COLORS)
    };
  };

  var createWizardsArray = function (wizardsArray) {
    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      wizardsArray[i] = createWizard();
    }
  };
  createWizardsArray(allWizards);

  window.data = {
    wizards: allWizards,
    wizardEyes: EYES_COLORS
  };
})();
