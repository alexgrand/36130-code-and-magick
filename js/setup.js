'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizards = [];

var setupElement = document.querySelector('.setup');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content;
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = setupSimilarElement.querySelector('.setup-similar-list');
var setupOpenElement = document.querySelector('.setup-open');
var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
var setupCloseElement = setupElement.querySelector('.setup-close');
var userNameElement = setupElement.querySelector('.setup-user-name');
var setupFormElement = document.querySelector('.setup-wizard-form');
var buttonSubmitElement = setupFormElement.querySelector('.setup-submit');

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

var onCloseSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetupElement();
  }
};

var onUserNameFocusin = function () {
  document.removeEventListener('keydown', onCloseSetupEscPress);
  userNameElement.addEventListener('focusout', onUserNameFocusout);
};

var onUserNameFocusout = function () {
  document.addEventListener('keydown', onCloseSetupEscPress);

  userNameElement.removeEventListener('focusout', onUserNameFocusout);
};

var openSetupElement = function () {
  setupElement.classList.remove('hidden');
  setupSimilarElement.classList.remove('hidden');

  userNameElement.addEventListener('focusin', onUserNameFocusin);
  document.addEventListener('keydown', onCloseSetupEscPress);
};

var closeSetupElement = function () {
  setupElement.classList.add('hidden');

  userNameElement.removeEventListener('focusin', onUserNameFocusin);
  document.removeEventListener('keydown', onCloseSetupEscPress);
};

setupOpenElement.addEventListener('click', openSetupElement);
setupOpenIconElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupElement();
  }
});

setupCloseElement.addEventListener('click', closeSetupElement);
setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupElement();
  }
});
