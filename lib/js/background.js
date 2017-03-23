'use strict';

var _handleTabs = require('./modules/handleTabs');

var _handleTabs2 = _interopRequireDefault(_handleTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.closeAllTab = _handleTabs2.default.closeAllTab; // tab
// cookie

window.openAllPastUrls = _handleTabs2.default.openAllPastUrls;

console.log(1, _handleTabs2.default);

function power() {
  console.log(22);
}

var power2 = function power2() {
  console.log(11);
};