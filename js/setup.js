'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;
var wizards = [];

var setupElement = document.querySelector('.setup');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content;
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = setupSimilarElement.querySelector('.setup-similar-list');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var getRandomValue = function (array) {
  var randomValue = Math.floor(Math.random() * (array.length));
  return array[randomValue];
};

var createWizard = function () {
  return {
    name: getRandomValue(NAMES) + ' ' + getRandomValue(LASTNAMES),
    coatColor: getRandomValue(COAT_COLORS),
    eyesColor: getRandomValue(EYES_COLORS)
  };
};

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

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizards[i] = createWizard();
}

renderDomElements(wizards, setupSimilarListElement);

var onOpenSetupElementClick = function () {
  setupElement.classList.remove('hidden');
  setupSimilarElement.classList.remove('hidden');
};

var onCloseSetupElementClick = function () {
  setupElement.classList.add('hidden');
};

setupOpenElement.addEventListener('click', onOpenSetupElementClick);
setupCloseElement.addEventListener('click', onCloseSetupElementClick);
