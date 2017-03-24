
const getCookies = (key, success, resolve) => {
  chrome.storage.local.get(key, function (items) {
    success(items);
    resolve()
  });
}

export default {
  getCookies
}