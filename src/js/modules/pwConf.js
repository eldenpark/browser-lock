import constant from '../constant/constant'
import domUtils from '../utils/domUtils'
import authenticationActions from '../actions/authenticationActions'


const validatePw = () => {
  const val1 = domUtils.get('pwConfPw1').value
  const val2 = domUtils.get('pwConfPw2').value
  if (val1 === val2) {
    var obj = {}
    obj[constant.MASTERPW] = val2
    authenticationActions.setPassword(obj, updateSuccess)
  } else {
    updateError()
  }

}

const updateSuccess = () => {
  domUtils.hideElement('pwConfMsgDefault')
  domUtils.showElement('pwConfMsgSuccess')

  setTimeout(() => {
    domUtils.hideElement('pwConfMsgSuccess')
    domUtils.showElement('pwConfMsgDefault')
  }, 2000)
}

const updateError = () => {
  domUtils.hideElement('pwConfMsgDefault')
  domUtils.showElement('pwConfMsgError')

  setTimeout(() => {
    domUtils.hideElement('pwConfMsgError')
    domUtils.showElement('pwConfMsgDefault')
  }, 2000)
}

const updateReady = () => {

  domUtils.get('pwConfSubmit').addEventListener('click', (e) => {
    validatePw()
  })
}






export default {
  updateReady
}