function closeAllTab() {
  console.log("closeAllTab()");

  var lockPageTabId;

  // pattern lock page open
  chrome.tabs.create({ "url": "/html/lock.html" }, function (tab) {
    console.log("lock page tab create");
    lockPageTabId = tab.id;
  });

  // close all tab (save tab url)
  chrome.tabs.getAllInWindow(function (tabs) {
    var pastUrls = new Array();

    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].id != lockPageTabId) {
        chrome.tabs.remove(tabs[i].id, function () { });
        pastUrls.push(tabs[i].url);
      }
    }

    saveTabUrlIntoStorage(pastUrls);
    //getAllCookies();
  });
}


function saveTabUrlIntoStorage(pastUrls) {

  var saveUrlFormat = "{";
  for (var i = 0; i < pastUrls.length; i++) {
    saveUrlFormat += pastUrls[i] + ";"
  }
  saveUrlFormat += "}";

  chrome.storage.sync.set({ 'plExt-pastUrls': saveUrlFormat }, function () {
    console.log("save storage " + saveUrlFormat);
  });
}


function openAllPastUrl() {

  chrome.storage.sync.get('plExt-pastUrls', function (items) {
    var urls = String(Object.values(items));
    urls = urls.replace('{', '');
    urls = urls.replace('}', '');
    pastUrls = urls.split(';');

    for (var i = 0; i < pastUrls.length; i++) {
      if (pastUrls[i].length > 0) {
        chrome.tabs.create({ "url": pastUrls[i] });
      }
    }
  });
}

function getAllCookies() {
  chrome.cookies.getAll(function (cookies) {
    for (var i = 0; i < cookies.length; i++) {
      console.log("cookies [" + i + "] " + Object.values(cookies[i]));
    }
  });
}

