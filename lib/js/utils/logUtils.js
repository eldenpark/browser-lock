"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var background = chrome.extension.getBackgroundPage();

exports.default = function (msg) {
  var background = chrome.extension.getBackgroundPage();
  background.log(msg);
  // background.log(msg);
};