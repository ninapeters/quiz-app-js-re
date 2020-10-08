import { getDataJsAll, displayNone, display } from './lib'

export default function setupNavigation() {
  const header = getDataJsAll('header')
  const pages = getDataJsAll('pages')
  const navIcons = getDataJsAll('nav-icons')

  navIcons.forEach(navigateToPage)

  function navigateToPage(navLink) {
    navLink.addEventListener('click', switchPages)
  }

  function switchPages(event) {
    const clickedIcon = event.currentTarget
    const targetPageName = clickedIcon.dataset.name
    const targetHeaderName = clickedIcon.dataset.name

    header.forEach((header) => {
      const headerName = header.dataset.name
      header.classList.toggle('d-none', headerName !== targetHeaderName)
    })

    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('d-none', pageName !== targetPageName)
    })

    navIcons.forEach((navIcon) => {
      navIcon.classList.toggle(
        'navigation__icon--active',
        navIcon === clickedIcon
      )
    })
  }
}
