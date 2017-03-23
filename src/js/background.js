import handleTabs from './modules/handleTabs'
import handleCookies from './modules/handleCookies'
import handleHistory from './modules/handleHistory'
import handlePw from './modules/handlePw'

/**
 * Apis will be registered into Window object.
 */

const brwlock = window.brwlock = {}

brwlock.closeAllTabs = () => {
  console.log("background closeAlltabs");
  handleTabs.closeAllTabs();
  handleCookies.save();
  handleCookies.remove();
  handlePw.remove();
}

brwlock.openAllPastUrls = () => {
  let cookieRestored = handleCookies.restore();
  console.log(1, cookieRestored)

  Promise
    .all([cookieRestored])
    .then( ()=> {
      handleTabs.openAllPastUrls();
    })
}

brwlock.cookie = handleCookies;
brwlock.history = handleHistory;

