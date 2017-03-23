import patternLock from './modules/patternLock'
import pwConf from './modules/pwConf'
import background from './background'
import handleLockStatus from './modules/handleLockStatus'

let browserIsLocked;

window.onload = () => {
  let checkStatus = handleLockStatus.checkLockStatus(getLockStatusSuccessCallBack);

  Promise
    .all([checkStatus])
    .then(() => {
      console.log("check lock : " + browserIsLocked);
      if (browserIsLocked == false) {
        location.href = "http://google.co.kr";
      }
    })

  // window.location.href = "/html/options.html"
  chrome.history.deleteAll(() => {
    console.log(11)
  })
  patternLock.promptReady(background.openAllPastUrls);

}

function getLockStatusSuccessCallBack(status) {
  if (status == 'lock') {
    browserIsLocked = true;
  } else {
    browserIsLocked = false;
  }
}
