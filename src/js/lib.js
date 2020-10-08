// ====== function getDataJS ======

function getDataJS(name) {
  const selector = `[data-js="${name}"]`
  return document.querySelector(selector)
}

// ====== displayNone and display ======
function displayNone(selector) {
  selector.classList.add('d-none')
}
function display(selector) {
  selector.classList.remove('d-none')
}
