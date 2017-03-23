function save() {
  chrome.cookies.getAll({}, function (cookies) {
    chrome.storage.sync.set({ 'brwlock-cookie': cookies }, function () {
      console.log('save cookie to storage ' + cookies);
    });

    for (var i = 0; i < cookies.length; i++) {
      console.log("cookies [" + i + "] " + Object.values(cookies[i]));
    }
  });
}

function remove() {
  chrome.browsingData.removeCookies({});
}

function restore() {
  console.log('cookie restore');
  chrome.storage.sync.get('brwlock-cookie', function (items) {
    var brwlockCookies = items['brwlock-cookie'];
    for (var i in brwlockCookies) {
      brwlockCookies[i].url = getCookieUrl(brwlockCookies[i]);
      delete brwlockCookies[i].hostOnly;
      delete brwlockCookies[i].session;

      chrome.cookies.set(brwlockCookies[i]);
    }
  });
}

function getCookieUrl(cookie) {
  return "http" + (cookie.secure ? "s" : "") + "://" +
    cookie.domain + cookie.path;
}


export default {
  save,
  remove,
  restore
}