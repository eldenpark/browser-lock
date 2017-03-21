function closeAllTab() {
  console.log("closeAllTab()");

  var lockPageTabId;

  // pattern lock page open
  chrome.tabs.create({"url":"/html/lock.html"}, function(tab) {
    console.log("lock page tab create");
    lockPageTabId = tab.id;
  });

  // close all tab (save tab url)
  chrome.tabs.getAllInWindow(function (tabs) {
    var pastUrls = new Array();

    for(var i = 0; i <  tabs.length; i++) {
      if(tabs[i].id != lockPageTabId) {
        chrome.tabs.remove(tabs[i].id, function () { });
        pastUrls.push(tabs[i].url);
      }
    }
    
    saveTabUrlIntoStorage(pastUrls);
  });

  

  // 일주일까지의 기록 삭제
}

function saveTabUrlIntoStorage(pastUrls) {

  var saveUrlFormat = "{";
  for(var i = 0; i < pastUrls.length; i++) {
    saveUrlFormat += pastUrls[i] + ";"
  }
  saveUrlFormat += "}";

  console.log(saveUrlFormat);
  
}