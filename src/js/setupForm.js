import { getDataJs } from './lib'
export default function setupForm() {
  const formSubmitButton = getDataJs('form-submit-button')
  const form = getDataJs('form')

  formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault()
    form.reset()
  })
}
