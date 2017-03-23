
var background = chrome.extension.getBackgroundPage();
var closeBtn = document.getElementById('lockBrowserBtn');

document.addEventListener('DOMContentLoaded', function () {
  background.console.log('evt handler');
  document.getElementById('lockBrowserBtn').addEventListener('click', closeAllTab);
  document.getElementById('unlockBrowserBtn').addEventListener('click', openAllPastUrl);
})

function closeAllTabs(evt) {
  background.console.log('removeTab btn click');
  background.closeAllTabs();
}

function openAllPastUrls(evt) {
  background.console.log('reopen btn click');
  background.openAllPastUrls();
}
