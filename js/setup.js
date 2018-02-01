'use strict';
var setupElement = document.querySelector('.hidden');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107),', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZZARDS = 4;
var wizzards = [];

var getRandomValue = function (array) {
  var randomValue = Math.floor(Math.random() * (array.length));
  return array[randomValue];
};

var createWizzard = function () {
  return {
    name: getRandomValue(NAMES) + ' ' + getRandomValue(LASTNAMES),
    coatColor: getRandomValue(COAT_COLORS),
    eyesColor: getRandomValue(EYES_COLORS)
  };
};

for (var i = 0; i < NUMBER_OF_WIZZARDS; i++) {
  wizzards[i] = createWizzard();
}

setupElement.classList.remove('hidden');

