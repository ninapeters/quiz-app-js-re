// ###### querySelectors ######

// ------ Header ------
const headerHome = document.querySelector('[data-js="header-home"]')
const headerBookmarks = document.querySelector('[data-js="header-bookmarks"]')
const headerCreate = document.querySelector('[data-js="header-create"]')
const headerProfile = document.querySelector('[data-js="header-profile"]')

// ------ Main ------
const mainHome = document.querySelector('[data-js="main-home"]')
const mainBookmarks = document.querySelector('[data-js="main-bookmarks"]')
const mainCreate = document.querySelector('[data-js="main-create"]')
const mainProfile = document.querySelector('[data-js="main-profile"]')

// ------ Nav Icons ------
const navIconHome = document.querySelector('[data-js="nav-icon--home"]')
const navIconBookmarks = document.querySelector(
  '[data-js="nav-icon--bookmarks"]'
)
const navIconCreate = document.querySelector('[data-js="nav-icon--create"]')
const navIconProfile = document.querySelector('[data-js="nav-icon--profile"]')

// ------ Bookmark Icons ------
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]')

// ------ Answer Buttons ------
const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
)
const hideAnswerButton = document.querySelector(
  '[data-js="hide-answer-button"]'
)

// ------ Answer Text ------
const answerText = document.querySelector('[data-js="answer-text"]')

// ###### CALL FUNCTIONS ######

// ====== addEventListeners for navigation icons to display/hide areas ======

navIconHome.addEventListener('click', navigateToHome)
navIconBookmarks.addEventListener('click', navigateToBookmarks)
navIconCreate.addEventListener('click', navigateToCreate)
navIconProfile.addEventListener('click', navigateToProfile)

// ====== addEventListener for bookmark icons to toggle (activate/deactive) status ======
bookmarkIcon.addEventListener('click', toggleBookmarkIcon)

// ====== addEventListener for show answer button and hide answer button to show/hide answer section ======
showAnswerButton.addEventListener('click', showAnswerSection)
hideAnswerButton.addEventListener('click', hideAnswerSection)

// ###### FUNCTION DECLARATIONS ######

// ====== function declarations for navigation ======

// ------ navigate to home page ------
function navigateToHome() {
  display(headerHome)
  displayNone(headerBookmarks)
  displayNone(headerCreate)
  displayNone(headerProfile)

  display(mainHome)
  displayNone(mainBookmarks)
  displayNone(mainCreate)
  displayNone(mainProfile)

  activateIcon(navIconHome)
  deactivateIcon(navIconBookmarks)
  deactivateIcon(navIconCreate)
  deactivateIcon(navIconProfile)
}

// ------ navigate to bookmarks page ------
function navigateToBookmarks() {
  displayNone(headerHome)
  display(headerBookmarks)
  displayNone(headerCreate)
  displayNone(headerProfile)

  displayNone(mainHome)
  display(mainBookmarks)
  displayNone(mainCreate)
  displayNone(mainProfile)

  deactivateIcon(navIconHome)
  activateIcon(navIconBookmarks)
  deactivateIcon(navIconCreate)
  deactivateIcon(navIconProfile)
}

// ------ navigate to create page ------
function navigateToCreate() {
  displayNone(headerHome)
  displayNone(headerBookmarks)
  display(headerCreate)
  displayNone(headerProfile)

  displayNone(mainHome)
  displayNone(mainBookmarks)
  display(mainCreate)
  displayNone(mainProfile)

  deactivateIcon(navIconHome)
  deactivateIcon(navIconBookmarks)
  activateIcon(navIconCreate)
  deactivateIcon(navIconProfile)
}

// ------ navigate to profile page ------
function navigateToProfile() {
  displayNone(headerHome)
  displayNone(headerBookmarks)
  displayNone(headerCreate)
  display(headerProfile)

  displayNone(mainHome)
  displayNone(mainBookmarks)
  displayNone(mainCreate)
  display(mainProfile)

  deactivateIcon(navIconHome)
  deactivateIcon(navIconBookmarks)
  deactivateIcon(navIconCreate)
  activateIcon(navIconProfile)
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

// ------ toggle (=show/hide) answer text ------
function toggleAnswerText() {
  answerText.classList.toggle('d-none')
}

// ====== displayNone, display and displayToggle ======
function displayNone(selector) {
  selector.classList.add('d-none')
}
function display(selector) {
  selector.classList.remove('d-none')
}
