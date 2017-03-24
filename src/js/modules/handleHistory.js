import handleStorage from './handleStorage'

function save() {
  chrome.history.search({ text: '' }, function (histories) {
    handleStorage.save('brwlock-history', histories);
  });
}

function remove() {
  chrome.browsingData.removeHistory({});
}

function restore() {
  handleStorage.get('brwlock-history', function (items) {
    var brwlockHistories = items['brwlock-history'];
    for (var i in brwlockHistories) {
      var obj = {};
      obj['url'] = brwlockHistories[i].url;
      chrome.history.addUrl(obj);
    }
  });
}

export default {
  save,
  remove,
  restore
}