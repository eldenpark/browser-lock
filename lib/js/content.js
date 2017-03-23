"use strict";

var a = window.localStorage;
console.log(1, a);
console.log(2, window.sessionStorage);
console.log(3, document.cookie);

chrome.cookie.getAll({}, function (cookies) {
  console.log(1, cookies);
});