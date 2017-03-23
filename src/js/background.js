import handleTabs from './modules/handleTabs'
import handleCookies from './modules/handleCookies'
import handleHistory from './modules/handleHistory'
import handlePw from './modules/handlePw'
import handleLockStatus from './modules/handleLockStatus'
import handleStorage from './modules/handleStorage'

/**
 * Apis will be registered into Window object.
 */

const brwlock = window.brwlock = {}

let browserIsLocked;

brwlock.lockBrowser = () => {

  handleLockStatus.checkLockStatus(setBrowserLockStatus);

  console.log("check lock : " + browserIsLocked);
  if(browserIsLocked == false) {
    handleTabs.closeAllTabs();
    handleCookies.save();
    handleCookies.remove();
    handlePw.remove();  
    handleLockStatus.updateLockStatus('lock');
  } else {
    console.log("already lock!");
  }
}

function setBrowserLockStatus(val) {
  console.log("status : " + val);
  if(val == 'lock') {
      browserIsLocked = true;
  } else {
    browserIsLocked = false;
  }
}

brwlock.unLockBrowser = () => {
  let cookieRestored = handleCookies.restore();
  console.log(1, cookieRestored)

  Promise
    .all([cookieRestored])
    .then( ()=> {
      handleTabs.openAllPastUrls();
      handleLockStatus.updateLockStatus('unlock');
    })
}

brwlock.cookie = handleCookies;
brwlock.history = handleHistory;
brwlock.storage = handleStorage;
