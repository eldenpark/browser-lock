const getValues = (obj) => {
  let arr = []
  for(let o in obj) {
    arr.push(obj[o]);
  }
  return arr;
}


const getLockStatus = (key, success, resolve) => {
  chrome.storage.local.get(key, function (items) {
    console.log(1, success, resolve)
    let arr = getValues(items)
    success(String(arr));
    resolve()
  });
}

export default {
  getLockStatus
}