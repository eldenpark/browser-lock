const background = chrome.extension.getBackgroundPage();

export default (msg) => {
  const background = chrome.extension.getBackgroundPage();
  background.log(msg);
  // background.log(msg);
}
