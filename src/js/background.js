function closeAllTab() {
  console.log("closeAllTab()");

  chrome.tabs.getAllInWindow(function (tabs) {
    for(var i = 0; i <  tabs.length; i++) {
      chrome.tabs.remove(tabs[i].id, function () { });
      console.log(tabs[i].url);
    }
  });

  chrome.tabs.create("www.naver.com");
}