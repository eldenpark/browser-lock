
const hideElement = (id) => {
  if (document.getElementById(id)) {
    document.getElementById(id).classList.add('hide');
  }
}

const showElement = (id) => {
  if (document.getElementById(id)) {
    document.getElementById(id).classList.remove('hide');
  }
}

export default {
  hideElement,
  showElement
}