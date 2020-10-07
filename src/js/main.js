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

// ###### CALL FUNCTIONS ######

// ====== addEventListeners for navigation ======

navIconHome.addEventListener('click', navigateToHome)
navIconBookmarks.addEventListener('click', navigateToBookmarks)
navIconCreate.addEventListener('click', navigateToCreate)
navIconProfile.addEventListener('click', navigateToProfile)

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

// ====== displayNone and display ======

function displayNone(selector) {
  selector.classList.add('d-none')
}
function display(selector) {
  selector.classList.remove('d-none')
}

// ====== activate and deactivate navigation icon ======

function activateIcon(selector) {
  selector.classList.add('navigation__icon--active')
}
function deactivateIcon(selector) {
  selector.classList.remove('navigation__icon--active')
}
