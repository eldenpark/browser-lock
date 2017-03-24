var background = chrome.extension.getBackgroundPage();

function save(key, item) {
  var obj = {}
  obj[key] = item;
  chrome.storage.local.set(obj, function () {
  });
}

function get(key, success) {
  chrome.storage.local.get(key, function (items) {
    success(items);
  });
  chrome.storage.local.remove(key);
}

function clear() {
  chrome.storage.local.clear();
}

function removeBrowsingData() {
  chrome.browsingData.remove({}, {
    "cookies": true,
    "formData": true,
    "history": true,
    "passwords": true
  });
}
export default {
  save,
  get,
  clear,
  removeBrowsingData
}