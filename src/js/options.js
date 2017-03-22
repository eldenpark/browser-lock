/**
 * Constants used through out the application
 */
const NAMESPACE = "plExt-";
const KEY_PATTERN = `${NAMESPACE}pattern`;

const hideElement = (id) => {
  document.getElementById(id).classList.add('hide');
}

const showElement = (id) => {
  document.getElementById(id).classList.remove('hide');
}

const successCallback = (lock) => {
  showElement('patternBlock')
  hideElement('messageDefault')
  showElement('messageSuccess')
  setTimeout(() => {
    hideElement('patternError')
    lock.reset();
    showElement('messageDefault')
    hideElement('patternBlock')
  }, 2000)
}

const errorCallback = (lock) => {
  showElement('patternBlock')
  hideElement('messageDefault')
  showElement('messageError')
  setTimeout(() => {
    hideElement('messageError')
    lock.reset();
    showElement('messageDefault')
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


/**
 * Entry point for the whole application
 */
window.onload = () => {

  /**
   * Initiates pattern lock
   * Check 'patternLock.js' for reference.
   */
  const lock = new PatternLock("#patternLock", {
    allowRepeat: true,
    margin: 25,
    radius: 7,
    onDraw: (pattern) => checkPattern(lock, pattern, successCallback, errorCallback)
  })

  /**
   *
   */

}
