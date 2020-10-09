export function getDataJs(name) {
  return document.querySelector(`[data-js="${name}"]`)
}

export function getAllDataJs(name) {
  return document.querySelectorAll(`[data-js="${name}"]`)
}

export function displayNone(element) {
  element.classList.add('d-none')
}

export function display(selector) {
  selector.classList.remove('d-none')
}
