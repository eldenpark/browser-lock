
const getLockStatus = (key, success, resolve) => {
  chrome.storage.local.get(key, function (items) {
    success(String(Object.values(items)));
    resolve()
  });
}

export default {
  getLockStatus
}