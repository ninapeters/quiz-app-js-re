import { display, displayNone, getAllDataJs } from './lib'

export default function setupCards() {
  const cards = getAllDataJs('card')
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkLogic(card)
  addAnswerLogic(card)
}

function addBookmarkLogic(card) {
  const bookmarkIcon = card.querySelector('svg')
  bookmarkIcon.addEventListener('click', toggleBookmark)
}

function toggleBookmark(event) {
  event.target.classList.toggle('card__bookmark-icon--active')
}

function addAnswerLogic(card) {
  const answerText = card.querySelector('[data-js="answer-text"')
  const hideAnswerButton = card.querySelector('[data-js=hide-answer-button]')
  const showAnswerButton = card.querySelector('[data-js=show-answer-button]')

  showAnswerButton.addEventListener('click', () => {
    display(answerText)
    display(hideAnswerButton)
    displayNone(showAnswerButton)
  })

  hideAnswerButton.addEventListener('click', () => {
    displayNone(answerText)
    displayNone(hideAnswerButton)
    display(showAnswerButton)
  })
}
