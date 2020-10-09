import { getDataJs, displayNone, display } from './lib'
export default function setupDarkmode() {
  const body = getDataJs('body')

  const lightmodeButton = getDataJs('lightmode-button')
  const darkmodeButton = getDataJs('darkmode-button')

  lightmodeButton.addEventListener('click', switchToLightmode)
  darkmodeButton.addEventListener('click', switchToDarkmode)

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
