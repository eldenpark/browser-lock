var background = chrome.extension.getBackgroundPage();

function save(key, item) {
  chrome.storage.sync.clear();

  var obj = {}
  obj[key] = item;
  chrome.storage.sync.set(obj, function () {
    background.console.log("save storage " + item);
  });
}

function get(key, success) {
  chrome.storage.sync.get(key, function (items) {
    var urls = String(Object.values(items));
     success(urls);
  });
}
export default {
  save,
  get
}