import handleStorage from './handleStorage'

// function checkLockStatus() {
//   handleStorage.get("brwlock-lockStatus", function (items) {
//     console.log("status : " + String(Object.values(items)));
//     if(String(Object.values(items)) == 'lock') {
//       console.log("return true");
//       return true;
//     } else {
//       console.log("return false");
//       return false;
//     }
//   });
// }


function checkLockStatus(browserLockStatus) {
  handleStorage.get("brwlock-lockStatus", function (items) {
    browserLockStatus(String(Object.values(items)));
  });
}

function updateLockStatus(lockStatus) {
  handleStorage.save("brwlock-lockStatus", lockStatus);
}

export default {
  checkLockStatus,
  updateLockStatus
}