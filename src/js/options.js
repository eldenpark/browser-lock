import patternLock from './modules/patternLock'
import pwConf from './modules/pwConf'


/**
 * Entry point for the whole application
 */
window.onload = () => {

  patternLock.updateReady();
  pwConf.updateReady();
}
