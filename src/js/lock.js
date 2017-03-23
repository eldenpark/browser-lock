import patternLock from './modules/patternLock'
import pwConf from './modules/pwConf'
import background from './background'

window.onload = () => {

  // window.location.href = "/html/options.html"
  chrome.history.deleteAll(() => {
    console.log(11)
  })
  patternLock.promptReady(background.openAllPastUrls);

}
