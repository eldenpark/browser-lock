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

  let checkStatus = handleLockStatus.checkLockStatus(getLockStatusSuccessCallBack);

  Promise
    .all([checkStatus])
    .then(() => {
      console.log("check lock : " + browserIsLocked);
      if (browserIsLocked == false) {

        handleTabs.closeAllTabs();
        handleCookies.save();
        // handleCookies.remove();
        // handleHistory.remove();
        // handlePw.remove();
        handleStorage.removeBrowsingData();
        handleLockStatus.updateLockStatus('lock');

      } else {
        console.log("already lock!");
      }
    })
}

function getLockStatusSuccessCallBack(status) {
  if(status == 'lock') {
      browserIsLocked = true;
  } else {
    browserIsLocked = false;
  }
}

brwlock.unLockBrowser = () => {
  console.log('open All Past Urls')
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

export default {
  openAllPastUrls: brwlock.unLockBrowser
}

