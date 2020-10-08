import { getDataJsAll, displayNone, display } from './lib'
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

  // ------ Select Answer Buttons and Answer Text------
  /*  const showAnswerButton = getDataJS('show-answer-button')
  const hideAnswerButton = getDataJS('hide-answer-button')
  const answerText = getDataJS('answer-text')

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
  } */
}
