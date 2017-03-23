import handleTabs from './modules/handleTabs'
import handleCookies from './modules/handleCookies'
import handleHistory from './modules/handleHistory'

/**
 * Apis will be registered into Window object.
 */

const brwlock = window.brwlock = {}

brwlock.closeAllTabs = () => {
  console.log("background closeAlltabs");
  handleTabs.closeAllTabs();
  handleCookies.closeAllTabs();
}

brwlock.openAllPastUrls = () => {
  handleTabs.openAllPastUrls();
}

brwlock.cookie = handleCookies;

brwlock.history = handleHistory;

