function save() {
  chrome.history.search({ text: '' }, function (histories) {
    chrome.storage.local.set({ 'brwlock-history': histories }, function () {
      console.log('save history to storage ' + histories);
    });
  });
}

function remove() {
  chrome.browsingData.removeHistory({});
}

function restore() {
  chrome.storage.local.get('brwlock-history', function (items) {
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