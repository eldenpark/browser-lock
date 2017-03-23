
const setPassword = (obj, success) => {
  chrome.storage.sync.set(obj, (res) => {
    console.log('password saved', obj)
    success()
  })
}

const setPattern = (obj, success, lock) => {
  chrome.storage.sync.set(obj, (res) => {
    console.log('pattern saved', obj)
    success(lock)
  })
}


export default {
  setPattern,
  setPassword
}