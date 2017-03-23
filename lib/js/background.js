'use strict';

var _handleTabs = require('./modules/handleTabs');

var _handleTabs2 = _interopRequireDefault(_handleTabs);

var _handleCookies = require('./modules/handleCookies');

var _handleCookies2 = _interopRequireDefault(_handleCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Apis will be registered into Window object.
 */

var brwlock = window.brwlock = {};

brwlock.closeAllTabs = function () {
  _handleTabs2.default.closeAllTab();
  _handleCookies2.default.closeAllTab();
};
brwlock.openAllPastUrls = _handleTabs2.default.openAllPastUrls;