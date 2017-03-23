
var background = chrome.extension.getBackgroundPage();
var closeBtn = document.getElementById('lockBrowserBtn');

document.addEventListener('DOMContentLoaded', function () {
  background.console.log('evt handler');
  document.getElementById('lockBrowserBtn').addEventListener('click', lockBrowser);
  document.getElementById('unlockBrowserBtn').addEventListener('click', unLockBrowser);
})

function lockBrowser(evt) {
  background.console.log('removeTab btn click');
  background.brwlock.lockBrowser();
}

function unLockBrowser(evt) {
  background.console.log('reopen btn click');
  background.brwlock.unLockBrowser();
}
