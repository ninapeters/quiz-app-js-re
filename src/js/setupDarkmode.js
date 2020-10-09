import { getDataJs } from './lib'

export default function setupDarkmode() {
  const darkmodeButton = getDataJs('darkmode-button')
  darkmodeButton.addEventListener('click', toggleDarkmode)

  function toggleDarkmode() {
    const body = getDataJs('body')
    const oldText = darkmodeButton.textContent.trim()

    darkmodeButton.textContent =
      oldText === 'darkmode' ? 'lightmode' : 'darkmode'

    body.classList.toggle('darkmode', oldText === 'lightmode')
    body.classList.toggle('lightmode', oldText === 'darkmode')
  }
}
