const morseElementClass = "morse-element"
const morseEnabledClass = "on"
const morseDisablingClass = "turning-off"

function morseElementID(character) {
  return `morse-element-${character.toLowerCase()}`
}

function hasClass(element, className) {
  return element.classList.contains(className)
}

function addClass(element, className) {
  if (!element || hasClass(element, className)) {
    return
  }

  element.classList.add(className)
}

function removeClass(element, className) {
  element.classList.remove(className)
}

function enableCharacter(decodedCharacter) {
  const rootElementID = morseElementID('root')
  const rootElement = document.getElementById(rootElementID)

  const elementID = morseElementID(decodedCharacter)
  const element = document.getElementById(elementID)

  addClass(rootElement, morseEnabledClass)
  addClass(element, morseEnabledClass)
}

function disableCharacters() {
  const elements = document.querySelectorAll('[id^="morse-element-"]')

  for (element of elements) {
    if (hasClass(element, morseEnabledClass)) {
      removeClass(element, morseEnabledClass)
      addClass(element, morseDisablingClass)
    }
  }
}

function stopMorseDisablingAnimation(element) {
  removeClass(element, morseDisablingClass)
}

function updateCurrentCharacter(decodedCharacter) {
  const element = document.getElementById("current-character")

  if (!element) {
    return
  }

  element.textContent = decodedCharacter
}

function updateCurrentWord(decodedWord) {
  const element = document.getElementById("current-word")

  if (!element) {
    return
  }

  element.textContent = decodedWord
}

function updatePreviousWords(decodedWords) {
  const element = document.getElementById("previous-words")

  if (!element) {
    return
  }

  element.textContent = decodedWords
}
