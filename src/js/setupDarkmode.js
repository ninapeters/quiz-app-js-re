import { getDataJS, displayNone, display } from './lib'
export default function setupDarkmode() {
  const body = getDataJS('body')

  // ------ Select Dark and Light Mode Buttons ------
  const lightmodeButton = getDataJS('lightmode-button')
  const darkmodeButton = getDataJS('darkmode-button')

  // ====== dark and lightmode buttons to switch between modes ======
  lightmodeButton.addEventListener('click', switchToLightmode)
  darkmodeButton.addEventListener('click', switchToDarkmode)

  // ====== switch color theme to lightmode/darkmode ======
  function switchToDarkmode() {
    displayNone(darkmodeButton)
    display(lightmodeButton)
    body.classList.add('darkmode')
    body.classList.remove('lightmode')
  }
  function switchToLightmode() {
    display(darkmodeButton)
    displayNone(lightmodeButton)
    body.classList.remove('darkmode')
    body.classList.add('lightmode')
  }
}
