'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hideElement = function hideElement(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).classList.add('hide');
  }
};

var showElement = function showElement(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).classList.remove('hide');
  }
};

exports.default = {
  hideElement: hideElement,
  showElement: showElement
};