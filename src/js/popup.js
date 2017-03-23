
var background = chrome.extension.getBackgroundPage();
var closeBtn = document.getElementById('lockBrowserBtn');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lockBrowserBtn').addEventListener('click', closeAllTab);
    document.getElementById('unlockBrowserBtn').addEventListener('click', openAllPastUrl);
    document.getElementById('cookieBtn').addEventListener('click', cookieControl);
})