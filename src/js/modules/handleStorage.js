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
  clear();
}

function clear() {
  chrome.storage.local.clear();
}

export default {
  save,
  get,
  clear
}