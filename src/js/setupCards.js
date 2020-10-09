import { getDataJsAll, getDataJs, displayNone, display } from './lib'
export default function setupCard() {
  // ------ Select Bookmark Icons ------
  const bookmarkIcons = getDataJsAll('bookmark-icon')

  bookmarkIcons.forEach(toggleBookmarkIcon)

  function toggleBookmarkIcon(bookmarkIcons) {
    bookmarkIcons.addEventListener('click', activateBookmarkIcon)
  }

  function activateBookmarkIcon(event) {
    bookmarkIcons.forEach((bookmarkIcon) => {
      bookmarkIcon.classList.toggle(
        'card__bookmark-icon--active',
        bookmarkIcon === event.currentTarget
      )
    })
  }

  // NOCH DER ALTE CODE!

  const showAnswerButton = getDataJs('show-answer-button')
  const hideAnswerButton = getDataJs('hide-answer-button')
  const answerText = getDataJs('answer-text')

  showAnswerButton.addEventListener('click', showAnswerSection)
  hideAnswerButton.addEventListener('click', hideAnswerSection)

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
}
