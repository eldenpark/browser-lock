import constant from '../constant/constant'

const setPassword = (pw, success) => {
  var obj = {}
  obj[constant.MASTERPW] = pw

  chrome.storage.local.set(obj, (res) => {
    console.log('password saved', obj)
    success()
  })
}

const setPattern = (pw, success, lock) => {
  var obj = {}
  obj[constant.MASTERPW] = pw

  chrome.storage.local.set(obj, (res) => {
    console.log('pattern saved', obj)
    success(lock, pattern)
  })
}


const getPassword = (success) => {
  chrome.storage.local.get(constant.MASTERPW, (res) => {
    success(res)
  })
}

const getPattern = (lock, pattern, success) => {
  chrome.storage.local.get(constant.MASTERPW, (res) => {
    success(lock, pattern, res)
  })
}

const pwIsAlreadySet = () => {
  chrome.storage.local.get(key, (res) => {
    console.log(1, res)
  })
}

export default {
  setPattern,
  setPassword,
  getPassword,
  getPattern,
  pwIsAlreadySet
}