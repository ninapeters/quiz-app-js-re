import { getAllDataJs, display, displayNone } from './lib'

export default function setupNavigation() {
  const headers = getAllDataJs('header')
  const pages = getAllDataJs('page')
  const navItems = getAllDataJs('nav')

  navItems.forEach(addClickLogic)

  function addClickLogic(navItem) {
    navItem.addEventListener('click', handleClick)
  }

  function handleClick(event) {
    const navItem = event.currentTarget
    const targetName = navItem.dataset.name // 'home' or 'bookmarks' etc.
    updateHeaders(targetName)
    updatePages(targetName)
    updateNavigation(targetName)
  }

  function updatePages(targetName) {
    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('d-none', pageName !== targetName)
    })
  }

  function updateHeaders(targetName) {
    headers.forEach((header) => {
      const headerName = header.dataset.name
      header.classList.toggle('d-none', headerName !== targetName)
    })
  }

  function updateNavigation(targetName) {
    navItems.forEach((navItem) => {
      const navName = navItem.dataset.name
      navItem.classList.toggle(
        'navigation__button--active',
        navName === targetName
      )
    })
  }
}
