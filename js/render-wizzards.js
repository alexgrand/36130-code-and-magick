'use strict';
(function () {
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content;
  var setupSimilarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderDomElements = function (allWizards, element) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < allWizards.length; i++) {
      fragment.appendChild(renderWizard(allWizards[i]));
    }
    element.appendChild(fragment);
  };

  renderDomElements(window.data.wizards, setupSimilarListElement);
})();
