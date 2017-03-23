'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var successCallback = function successCallback(lock) {
  showElement('patternBlock');
  hideElement('patternMsgDefault');
  showElement('patternMsgSuccess');

  setTimeout(function () {
    hideElement('patternMsgSuccess');
    lock.reset();
    showElement('patternMsgDefault');
    hideElement('patternBlock');
  }, 2000);
};

var errorCallback = function errorCallback(lock) {
  showElement('patternBlock');
  hideElement('patternMsgDefault');
  showElement('patternMsgError');

  setTimeout(function () {
    hideElement('patternMsgError');
    lock.reset();
    showElement('patternMsgDefault');
    hideElement('patternBlock');
  }, 2000);
};

var checkPattern = function checkPattern(lock, pattern, success, error) {
  chrome.storage.sync.get(KEY_PATTERN, function (res) {
    console.log("key in storage", res);
    if (pattern == res[KEY_PATTERN]) {
      success(lock);
    } else {
      error(lock);
    }
  });
};

var initiate = function initiate() {
  /**
   * Initiates pattern lock
   * Check 'patternLock.js' for reference.
   */
  var lock = new PatternLock("#patternLock", {
    allowRepeat: true,
    margin: 25,
    radius: 9,
    onDraw: function onDraw(pattern) {
      return checkPattern(lock, pattern, successCallback, errorCallback);
    }
  });
};

exports.default = function () {
  console.log(11);
  initiate();
}();