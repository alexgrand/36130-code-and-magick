'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    getRandomValue: function (array) {
      var randomValue = Math.floor(Math.random() * (array.length));
      return array[randomValue];
    },
    addRemoveListeners: function (element, eventType, handler, add) {
      if (add) {
        element.addEventListener(eventType, handler);
      } else {
        element.removeEventListener(eventType, handler);
      }
    },
    runHandlers: function (listenersArray, addinglistener) {
      for (var j = 0; j < listenersArray.length; j++) {
        this.addRemoveListeners(listenersArray[j].element, listenersArray[j].eventType, listenersArray[j].handler, addinglistener);
      }
    },
    onDocumentEscPress: function (evt, handler) {
      var activeUserNameElement = document.activeElement.classList.contains('setup-user-name');
      if (evt.keyCode === ESC_KEYCODE && !activeUserNameElement) {
        handler();
      }
    },
    onDocumentEnterPress: function (evt, handler) {
      if (evt.keyCode === ENTER_KEYCODE) {
        handler();
      }
    }
  };
})();
