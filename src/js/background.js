import handleTabs from './modules/handleTabs'
import handleCookies from './modules/handleCookies'

/**
 * Apis will be registered into Window object.
 */

const brwlock = window.brwlock = {}

brwlock.closeAllTabs = () => {
  handleTabs.closeAllTab();
  handleCookies.closeAllTab();
}

brwlock.handleCookies = handleCookies;

brwlock.openAllPastUrls = handleTabs.openAllPastUrls;
