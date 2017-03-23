'use strict';

/**
 * Constants used through out the application
 */
var NAMESPACE = "plExt-";
var KEY_PATTERN = NAMESPACE + 'pattern';

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

/**
 * Entry point for the whole application
 */
window.onload = function () {

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

  /**
   * Loads browser history stash
   */
  chrome.cookies.getAll({ url: "https://facebook.com" }, function (cookies) {
    console.log(1, cookies);
  });
};