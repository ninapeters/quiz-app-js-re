// ------ Select Body ------
const body = getDataJS('body')

// ------ Select Header ------
const headerHome = getDataJS('header-home')
const headerBookmarks = getDataJS('header-bookmarks')
const headerCreate = getDataJS('header-create')
const headerProfile = getDataJS('header-profile')

// ------ Select Main ------
const mainHome = getDataJS('main-home')
const mainBookmarks = getDataJS('main-bookmarks')
const mainCreate = getDataJS('main-create')
const mainProfile = getDataJS('main-profile')

// ------ Select Nav Icons ------
const navIconHome = getDataJS('nav-icon--home')
const navIconBookmarks = getDataJS('nav-icon--bookmarks')
const navIconCreate = getDataJS('nav-icon--create')
const navIconProfile = getDataJS('nav-icon--profile')

// ------ Select Bookmark Icons ------
const bookmarkIcon = getDataJS('bookmark-icon')

// ------ Select Answer Buttons and Answer Text------
const showAnswerButton = getDataJS((s = 'show-answer-button'))
const hideAnswerButton = getDataJS((s = 'hide-answer-button'))
const answerText = getDataJS('answer-text')

// ------ Select Form Submit Button and Text Inputs ------
const formSubmitButton = getDataJS((s = 'form-submit-button'))
const form = getDataJS('form')

// ------ Select Dark and Light Mode Buttons ------
const lightmodeButton = getDataJS('lightmode-button')
const darkmodeButton = getDataJS('darkmode-button')

// ###### CALL FUNCTIONS WITH ADDEVENTLISTENER ######

// ====== navigation icons to display/hide pages ======
navIconHome.addEventListener('click', navigateToHome)
navIconBookmarks.addEventListener('click', navigateToBookmarks)
navIconCreate.addEventListener('click', navigateToCreate)
navIconProfile.addEventListener('click', navigateToProfile)

// ====== bookmark icons to toggle (activate/deactive) status ======
bookmarkIcon.addEventListener('click', toggleBookmarkIcon)

// ====== show and hide answer buttons to show/hide answer section ======
showAnswerButton.addEventListener('click', showAnswerSection)
hideAnswerButton.addEventListener('click', hideAnswerSection)

// ====== form submit button with arrow function to reset form ======
formSubmitButton.addEventListener('click', () => form.reset())

// ====== dark and lightmode buttons to switch between modes ======
lightmodeButton.addEventListener('click', switchToLightmode)
darkmodeButton.addEventListener('click', switchToDarkmode)

// ###### FUNCTION DECLARATIONS ######

// ====== function getDataJS ======

function getDataJS(name) {
  const selector = `[data-js="${name}"]`
  return document.querySelector(selector)
}

// ====== function declarations for navigation ======

// ------ navigate to home page ------
function navigateToHome() {
  hideAllPages()
  showPage(headerHome, mainHome, navIconHome)
}

// ------ navigate to bookmarks page ------
function navigateToBookmarks() {
  hideAllPages()
  showPage(headerBookmarks, mainBookmarks, navIconBookmarks)
}

// ------ navigate to create page ------
function navigateToCreate() {
  hideAllPages()
  showPage(headerCreate, mainCreate, navIconCreate)
}

// ------ navigate to profile page ------
function navigateToProfile() {
  hideAllPages()
  showPage(headerProfile, mainProfile, navIconProfile)
}

// ====== function hide all pages ======
function hideAllPages() {
  displayNone(headerHome)
  displayNone(headerBookmarks)
  displayNone(headerCreate)
  displayNone(headerProfile)

  displayNone(mainHome)
  displayNone(mainBookmarks)
  displayNone(mainCreate)
  displayNone(mainProfile)

  deactivateIcon(navIconHome)
  deactivateIcon(navIconBookmarks)
  deactivateIcon(navIconCreate)
  deactivateIcon(navIconProfile)
}

// ====== function to show all parts of a page ======

function showPage(headerPageName, mainPageName, navIconPageName) {
  display(headerPageName)
  display(mainPageName)
  activateIcon(navIconPageName)
}

// ====== activate and deactivate navigation icon ======
function activateIcon(selector) {
  selector.classList.add('navigation__icon--active')
}
function deactivateIcon(selector) {
  selector.classList.remove('navigation__icon--active')
}

// ====== toggle (=activate/deactivate) bookmark icons ======
function toggleBookmarkIcon() {
  bookmarkIcon.classList.toggle('card__bookmark-icon--active')
}

// ====== show and hide answer section ======
function showAnswerSection() {
  display(answerText)
  display(hideAnswerButton)
  displayNone(showAnswerButton)
}
function hideAnswerSection() {
  displayNone(answerText)
  displayNone(hideAnswerButton)
  display(showAnswerButton)
}

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

// ====== displayNone and display ======
function displayNone(selector) {
  selector.classList.add('d-none')
}
function display(selector) {
  selector.classList.remove('d-none')
}
