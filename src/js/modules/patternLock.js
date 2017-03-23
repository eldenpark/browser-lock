import constant from '../constant/constant'
import domUtils from '../utils/domUtils'
import authenticationActions from '../actions/authenticationActions'

const updateSuccess = (lock) => {
  domUtils.showElement('patternBlock')
  domUtils.hideElement('patternMsgDefault')
  domUtils.showElement('patternMsgSaved')

  setTimeout(() => {
    domUtils.hideElement('patternMsgSaved')
    lock.reset();
    domUtils.showElement('patternMsgDefault')
    domUtils.hideElement('patternBlock')
  }, 2000)
}

const errorCallback = (lock) => {
  domUtils.showElement('patternBlock')
  domUtils.hideElement('patternMsgDefault')
  domUtils.showElement('patternMsgError')

  setTimeout(() => {
    domUtils.hideElement('patternMsgError')
    lock.reset();
    domUtils.showElement('patternMsgDefault')
    domUtils.hideElement('patternBlock')
  }, 2000)
}

const checkPatternToUpdate = (lock, pattern, success) => {
  var obj = {}
  obj[constant.MASTERPW] = pattern

  authenticationActions.setPattern(obj, success, lock)
}

const updateReady = () => {
  /**
   * Initiates pattern lock
   * Check 'patternLock.js' for reference.
   */
  const lock = new PatternLock("#patternLock", {
    allowRepeat: true,
    margin: 25,
    radius: 9,
    onDraw: (pattern) => checkPatternToUpdate(lock, pattern, updateSuccess)
  })
}

export default {
  updateReady

}