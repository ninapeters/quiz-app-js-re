import { getDataJS, displayNone, display } from './lib'

export default function setupNavigation() {
  /*   const header = document.querySelectorAll()
  const pages = document.querySelectorAll()
  const navIcons = document.querySelectorAll() */

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

  // ====== navigation icons to display/hide pages ======
  navIconHome.addEventListener('click', navigateToHome)
  navIconBookmarks.addEventListener('click', navigateToBookmarks)
  navIconCreate.addEventListener('click', navigateToCreate)
  navIconProfile.addEventListener('click', navigateToProfile)

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
}
