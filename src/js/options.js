import patternLock from './modules/patternLock'

/**
 * Constants used through out the application
 */
const NAMESPACE = "brwlock-";
const KEY_PATTERN = `${NAMESPACE}pattern`;



/**
 * Entry point for the whole application
 */
window.onload = () => {

  /**
   * Loads browser history stash
   */
  chrome.cookies.getAll({url: "https://facebook.com"}, function(cookies) {
    console.log(1, cookies)
  });

}
