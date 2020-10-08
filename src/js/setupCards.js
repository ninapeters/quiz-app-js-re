import { getDataJS, displayNone, display } from './lib'
export default function setupCard() {
  // ------ Select Bookmark Icons ------
  const bookmarkIcon = getDataJS('bookmark-icon')

  // ====== bookmark icons to toggle (activate/deactive) status ======
  bookmarkIcon.addEventListener('click', toggleBookmarkIcon)

  // ====== toggle (=activate/deactivate) bookmark icons ======
  function toggleBookmarkIcon() {
    bookmarkIcon.classList.toggle('card__bookmark-icon--active')
  }

  // ------ Select Answer Buttons and Answer Text------
  const showAnswerButton = getDataJS('show-answer-button')
  const hideAnswerButton = getDataJS('hide-answer-button')
  const answerText = getDataJS('answer-text')

  // ====== show and hide answer buttons to show/hide answer section ======
  showAnswerButton.addEventListener('click', showAnswerSection)
  hideAnswerButton.addEventListener('click', hideAnswerSection)

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
}
