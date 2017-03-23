function saveItemIntoStorage(key, item) {

  chrome.storage.sync.set({ key : item }, function () {
    console.log("save storage " + item);
  });
}s