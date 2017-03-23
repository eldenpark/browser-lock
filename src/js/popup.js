
var background = chrome.extension.getBackgroundPage();
var closeBtn = document.getElementById('lockBrowserBtn');

document.addEventListener('DOMContentLoaded', function () {
    background.console.log('evt handler');
    document.getElementById('lockBrowserBtn').addEventListener('click', closeAllTab);
    document.getElementById('unlockBrowserBtn').addEventListener('click', openAllPastUrl);
})

function closeAllTab(evt) {
    background.console.log('removeTab btn click');
    background.closeAllTab();
}

function openAllPastUrl(evt) {
    background.console.log('reopen btn click');
    background.openAllPastUrl();
}