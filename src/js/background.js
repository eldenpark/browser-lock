import handleTabs from './modules/handleTabs'

/**
 * Apis will be registered into Window object.
 */
window.closeAllTab = handleTabs.closeAllTab;
window.openAllPastUrls = handleTabs.openAllPastUrls;
