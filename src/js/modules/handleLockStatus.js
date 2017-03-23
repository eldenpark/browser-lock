import handleStorage from './handleStorage'
import statusActions from '../actions/statusActions'

function checkLockStatus(getLockStatusSuccessCallBack) {
  const promise = new Promise((resolve, reject) => {
    statusActions.getLockStatus("brwlock-lockStatus", getLockStatusSuccessCallBack, resolve)
  })

  return promise;
}

function updateLockStatus(lockStatus) {
  handleStorage.save("brwlock-lockStatus", lockStatus);
}

export default {
  checkLockStatus,
  updateLockStatus
}