import handleStorage from './handleStorage'
import cookieActions from '../actions/cookieActions'
import constant from '../constant/constant'

const brwlock = window.brwlock = {}

function save() {
  chrome.cookies.getAll({}, function (cookies) {
    handleStorage.save('brwlock-cookies', cookies);
  });
}

function remove() {
  chrome.browsingData.removeCookies({});
}

function restore() {
  console.log('cookie restore');
  const promise = new Promise((resolve, reject) => {
    cookieActions.getCookies(constant.COOKIES, getCookiesSuccessCallBack, resolve)
  })

  return promise;
}

function getCookiesSuccessCallBack(items) {
  var brwlockCookies = items['brwlock-cookies'];
  console.log(brwlockCookies);
  for (var i in brwlockCookies) {
    brwlockCookies[i].url = getCookieUrl(brwlockCookies[i]);
    delete brwlockCookies[i].hostOnly;
    delete brwlockCookies[i].session;
    
    chrome.cookies.set(brwlockCookies[i]);
  }
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