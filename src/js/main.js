console.log('Hello World')

// [data-js="header-home"]
// [data-js="header-bookmarks"]
// [data-js="header-create"]
// [data-js="header-profile"]

// [data-js="nav-home"]
// [data-js="nav-bookmarks"]
// [data-js="nav-create"]
// [data-js="nav-profile"]

// [data-js="home-main"]
// [data-js="home-icon"]

const headerHome = document.querySelector('[data-js="header-home"]')
const headerBookmarks = document.querySelector('[data-js="header-bookmarks"]')
const headerCreate = document.querySelector('[data-js="header-create"]')
const headerProfile = document.querySelector('[data-js="header-profile"]')

const mainHome = document.querySelector('[data-js="main-home"]')
const mainBookmarks = document.querySelector('[data-js="main-bookmarks"]')
const mainCreate = document.querySelector('[data-js="main-create"]')
const mainProfile = document.querySelector('[data-js="main-profile"]')

const navHome = document.querySelector('[data-js="nav-home"]')
const navBookmarks = document.querySelector('[data-js="nav-bookmarks"]')
const navCreate = document.querySelector('[data-js="nav-create"]')
const navProfile = document.querySelector('[data-js="nav-profile"]')

const iconHome = document.querySelector('[data-js="icon-home"]')
const iconBookmarks = document.querySelector('[data-js="icon-bookmarks"]')
const iconCreate = document.querySelector('[data-js="icon-create"]')
const iconProfile = document.querySelector('[data-js="icon-profile"]')

navHome.addEventListener('click', displayHome)

function displayHome() {
  display(headerHome)
  displayNone(headerBookmarks)
  displayNone(headerCreate)
  displayNone(headerProfile)

  display(mainHome)
  displayNone(mainBookmarks)
  displayNone(mainCreate)
  displayNone(mainProfile)

  activateIcon(iconHome)
  deactivateIcon(iconBookmarks)
  deactivateIcon(iconCreate)
  deactivateIcon(iconProfile)
}

function displayNone(selector) {
  selector.classList.add('d-none')
}
function display(selector) {
  selector.classList.remove('d-none')
}

function activateIcon(selector) {
  selector.classList.add('navigation__icon--active')
}
function deactivateIcon(selector) {
  selector.classList.remove('navigation__icon--active')
}
