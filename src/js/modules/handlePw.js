function remove() {
  chrome.browsingData.removePasswords({});
}

export default {
  remove
}