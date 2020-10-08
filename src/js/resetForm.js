// ------ Select Form Submit Button and Text Inputs ------
const formSubmitButton = getDataJS((s = 'form-submit-button'))
const form = getDataJS('form')

// ====== form submit button with arrow function to reset form ======
formSubmitButton.addEventListener('click', () => form.reset())
