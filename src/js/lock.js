import patternLock from './modules/patternLock'
import pwConf from './modules/pwConf'
import background from './background'
import handleLockStatus from './modules/handleLockStatus'
import authenticationActions from './actions/authenticationActions'
import constant from './constant/constant'

let browserIsLocked;

const getLockStatusSuccessCallBack = (status) => {
  if (status == 'lock') {
    browserIsLocked = true;
  } else {
    browserIsLocked = false;
  }
}

const checkSanity = () => {
  authenticationActions.getPassword((res) => {
    if (!res.hasOwnProperty(constant.MASTERPW)) {
      window.location.href = "/html/options.html"
    } else {
      init()
    }
  })
}

const init = () => {
  // chrome.history.deleteAll(() => {
  //   console.log(11)
  // })

  patternLock.promptReady(background.unLockBrowser);
  let checkStatus = handleLockStatus.checkLockStatus(getLockStatusSuccessCallBack);

  Promise
    .all([checkStatus])
    .then(() => {
      console.log("check lock : " + browserIsLocked);
      if (browserIsLocked == false) {
        location.href = "http://google.co.kr";
      }
    })
}


/**
 * Entry point.
 */
window.onload = () => {

  checkSanity();

}


