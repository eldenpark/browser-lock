import constant from '../constant/constant'
import domUtils from '../utils/domUtils'
import authenticationActions from '../actions/authenticationActions'

let demandSuccess = false

const updateSuccess = (lock, pattern) => {
  domUtils.hideElement('patternMsgReDemand')
  domUtils.showElement('patternBlock')
  domUtils.hideElement('patternMsgDefault')
  domUtils.showElement('patternMsgSaved')

  domUtils.get('pwConf').firstElementChild.classList.remove('active')
  domUtils.get('patternConf').firstElementChild.classList.add('active')

  authenticationActions.setPassword(pattern, () => {})
  demandSuccess = false

  setTimeout(() => {
    domUtils.hideElement('patternMsgSaved')
    lock.reset();
    domUtils.showElement('patternMsgDefault')
    domUtils.hideElement('patternBlock')
  }, 2000)
}

const checkIfPwIsAlreadySet = (lock, pattern, success) => {
  authenticationActions.getPattern(lock, pattern, success)
}

const updateOrDemandPassword = (lock, pattern, res) => {
  console.log(11, res)
  if (!res.hasOwnProperty(constant.MASTERPW) || res === '' || demandSuccess) {
    console.log(1)
    updateSuccess(lock, pattern)
  } else {
    demandPassword(lock, pattern, res)
  }
}

const demandPassword = (lock, pattern, res) => {
  console.log(111, pattern, res[constant.MASTERPW])
  if (pattern === res[constant.MASTERPW]) {
    domUtils.showElement('patternBlock')
    domUtils.hideElement('patternMsgDefault')
    domUtils.showElement('patternMsgDemandSuccess')
    demandSuccess = true;

    setTimeout(() => {
      domUtils.hideElement('patternMsgDemandSuccess')
      lock.reset();
      domUtils.showElement('patternMsgReDemand')
      domUtils.hideElement('patternBlock')
    }, 2000)

  } else {
    domUtils.showElement('patternBlock')
    domUtils.hideElement('patternMsgDefault')
    domUtils.showElement('patternMsgDemand')

    setTimeout(() => {
      domUtils.hideElement('patternMsgDemand')
      lock.reset();
      domUtils.showElement('patternMsgDefault')
      domUtils.hideElement('patternBlock')
    }, 2000)
  }

}

const checkPatternToUpdate = (lock, pattern) => {
  checkIfPwIsAlreadySet(lock, pattern, updateOrDemandPassword)
}

const userDidTypeCorrect = (lock, openTabs) => {
  domUtils.showElement('patternBlock')
  domUtils.hideElement('patternMsgSuccess')

  setTimeout(() => {
    domUtils.hideElement('patternMsgError')
    lock.reset();
    domUtils.showElement('patternMsgDefault')
    domUtils.hideElement('patternBlock')
    openTabs()

  }, 2000)
}

const userDidTypeWrong = (lock) => {
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

const handleUserPattern = (lock, pattern, res, openTabs) => {
  console.log(1, pattern, res)
  if (res.hasOwnProperty(constant.MASTERPW) && res[constant.MASTERPW] === pattern) {
    console.log('yalu')
    userDidTypeCorrect(lock, openTabs)
  } else {
    console.log('nah')
    userDidTypeWrong(lock)

  }
}

const checkPatternDefault = (lock, pattern, handler, openTabs) => {
  authenticationActions.getPattern(lock, pattern, handler, openTabs)
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
    onDraw: (pattern) => checkPatternToUpdate(lock, pattern)
  })
}

const promptReady = (openTabs) => {
  const lock = new PatternLock("#patternLock", {
    allowRepeat: true,
    margin: 25,
    radius: 9,
    onDraw: (pattern) => checkPatternDefault(lock, pattern, handleUserPattern, openTabs)
  })
}

export default {
  updateReady,
  promptReady
}