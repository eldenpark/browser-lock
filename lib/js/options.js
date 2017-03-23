"use strict";

var _patternLock = require("./modules/patternLock");

var _patternLock2 = _interopRequireDefault(_patternLock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constants used through out the application
 */
var NAMESPACE = "brwlock-";
var KEY_PATTERN = NAMESPACE + "pattern";

/**
 * Entry point for the whole application
 */
window.onload = function () {

  /**
   * Loads browser history stash
   */
  chrome.cookies.getAll({ url: "https://facebook.com" }, function (cookies) {
    console.log(1, cookies);
  });
};