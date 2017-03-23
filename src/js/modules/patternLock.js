const successCallback = (lock) => {
  showElement('patternBlock')
  hideElement('patternMsgDefault')
  showElement('patternMsgSuccess')

  setTimeout(() => {
    hideElement('patternMsgSuccess')
    lock.reset();
    showElement('patternMsgDefault')
    hideElement('patternBlock')
  }, 2000)
}

const errorCallback = (lock) => {
  showElement('patternBlock')
  hideElement('patternMsgDefault')
  showElement('patternMsgError')

  setTimeout(() => {
    hideElement('patternMsgError')
    lock.reset();
    showElement('patternMsgDefault')
    hideElement('patternBlock')
  }, 2000)
}

const checkPattern = (lock, pattern, success, error) => {
  chrome.storage.sync.get(KEY_PATTERN, function(res) {
    console.log("key in storage", res)
    if (pattern == res[KEY_PATTERN]) {
      success(lock)
    } else {
      error(lock)
    }
  })
}

const initiate = () => {
  /**
   * Initiates pattern lock
   * Check 'patternLock.js' for reference.
   */
  const lock = new PatternLock("#patternLock", {
    allowRepeat: true,
    margin: 25,
    radius: 9,
    onDraw: (pattern) => checkPattern(lock, pattern, successCallback, errorCallback)
  })
}

export default (() => {
  console.log(11);
  initiate();
})();