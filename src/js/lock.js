import patternLock from './modules/patternLock'
import pwConf from './modules/pwConf'
import background from './background'

window.onload = () => {

  patternLock.promptReady(background.openAllPastUrls);

}
