export function getDataJS(name) {
  const selector = `[data-js="${name}"]`
  return document.querySelector(selector)
}

export function getDataJsAll(name) {
  const selector = `[data-js="${name}"]`
  return document.querySelectorAll(selector)
}

export function displayNone(selector) {
  selector.classList.add('d-none')
}

export function display(selector) {
  selector.classList.remove('d-none')
}
