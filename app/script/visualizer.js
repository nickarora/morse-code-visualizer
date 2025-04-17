const morseEnabledClass = "on"

function morseElementID(character) {
  return `morse-element-${character.toLowerCase()}`
}

function addClass(element, className) {
  if (!element || element.classList.contains(className)) {
    return
  }

  element.classList.add(className)
}

function removeClass(element, className) {
  element.classList.remove(className)
}

function enableCharacter(decodedCharacter) {
  const rootElementID = morseElementID("root")
  const rootElement = document.getElementById(rootElementID)

  const elementID = morseElementID(decodedCharacter)
  const element = document.getElementById(elementID)

  addClass(rootElement, morseEnabledClass)
  addClass(element, morseEnabledClass)
}

function disableCharacters() {
  const elements = document.querySelectorAll('[id^="morse-element-"]')

  for (element of elements) {
    removeClass(element, morseEnabledClass)
  }
}
