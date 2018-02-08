'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var WARNING_SHORT_NAME = 'Имя должно состоять минимум из двух символов!';
var WARNING_LONG_NAME = 'Имя не должно превышать 25 символов!';
var WARNING_REQUIRED = 'Это поле обязательно!';
var wizards = [];

var setupElement = document.querySelector('.setup');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content;
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = setupSimilarElement.querySelector('.setup-similar-list');
var setupOpenElement = document.querySelector('.setup-open');
var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
var setupCloseElement = setupElement.querySelector('.setup-close');
var userNameElement = setupElement.querySelector('.setup-user-name');
var setupWizardElement = document.querySelector('.setup-wizard');
var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

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

var changeWizardDetails = function (evt) {
  var element = evt.target;
  if (element.classList.contains('setup-fireball')) {
    element = element.parentNode;
    element.style.backgroundColor = getRandomValue(FIREBALL_COLORS);
  } else if (element.classList.contains('wizard-coat')) {
    element.style.fill = getRandomValue(COAT_COLORS);
  } else if (element.classList.contains('wizard-eyes')) {
    element.style.fill = getRandomValue(EYES_COLORS);
  }
};

var onCloseSetupEscPress = function (evt) {
  var activeUserNameElement = document.activeElement.classList.contains('setup-user-name');
  if (evt.keyCode === ESC_KEYCODE && !activeUserNameElement) {
    closeSetupElement();
  }
};

var onSetupCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupElement();
  }
};

var onSetupOpenIconEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupElement();
  }
};

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

var openSetupElement = function () {
  setupElement.classList.remove('hidden');
  setupSimilarElement.classList.remove('hidden');

  runOpenCloseSetupHandlers(true);
};

var closeSetupElement = function () {
  setupElement.classList.add('hidden');

  runOpenCloseSetupHandlers(false);
};

var addRemoveListeners = function (element, eventType, handler, add) {
  if (add) {
    element.addEventListener(eventType, handler);
  } else {
    element.removeEventListener(eventType, handler);
  }
};

var runBasichandlers = function () {
  for (var j = 0; j < basicHandlers.length; j++) {
    addRemoveListeners(basicHandlers[j].element, basicHandlers[j].eventType, basicHandlers[j].handler, basicHandlers[j].adding);
  }
};

var runOpenCloseSetupHandlers = function (addinglistener) {
  for (var k = 0; k < openCloseSetupHandlers.length; k++) {
    addRemoveListeners(openCloseSetupHandlers[k].element, openCloseSetupHandlers[k].eventType, openCloseSetupHandlers[k].handler, addinglistener);
  }
};

var basicHandlers = [
  {element: setupOpenElement,
    eventType: 'click',
    handler: openSetupElement,
    adding: true
  },
  {element: setupOpenIconElement,
    eventType: 'keydown',
    handler: onSetupOpenIconEnterPress,
    adding: true
  },
  {element: setupCloseElement,
    eventType: 'click',
    handler: closeSetupElement,
    adding: true
  },
  {element: setupCloseElement,
    eventType: 'keydown',
    handler: onSetupCloseEnterPress,
    adding: true
  },
  {element: wizardCoatElement,
    eventType: 'click',
    handler: changeWizardDetails,
    adding: true
  },
  {element: wizardEyesElement,
    eventType: 'click',
    handler: changeWizardDetails,
    adding: true
  },
  {element: wizardFireballElement,
    eventType: 'click',
    handler: changeWizardDetails,
    adding: true
  },
];

var openCloseSetupHandlers = [
  {element: userNameElement,
    eventType: 'invalid',
    handler: onUserNameInvalid
  },
  {element: userNameElement,
    eventType: 'input',
    handler: onUserNameInput
  },
  {element: document,
    eventType: 'keydown',
    handler: onCloseSetupEscPress
  }
];

runBasichandlers();
