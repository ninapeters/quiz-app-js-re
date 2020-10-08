// ------ Select Bookmark Icons ------
const bookmarkIcon = getDataJS('bookmark-icon')

// ------ Select Answer Buttons and Answer Text------
const showAnswerButton = getDataJS((s = 'show-answer-button'))
const hideAnswerButton = getDataJS((s = 'hide-answer-button'))
const answerText = getDataJS('answer-text')

// ====== bookmark icons to toggle (activate/deactive) status ======
bookmarkIcon.addEventListener('click', toggleBookmarkIcon)

// ====== show and hide answer buttons to show/hide answer section ======
showAnswerButton.addEventListener('click', showAnswerSection)
hideAnswerButton.addEventListener('click', hideAnswerSection)

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
