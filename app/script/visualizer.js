const morseEnabledClass = "on"

function enableElement(decodedCharacter) {
  const elementID = `morse-element-${decodedCharacter.toLowerCase()}`

  const element = document.getElementById(elementID)

  if (!element || element.classList.contains(morseEnabledClass)) {
    return
  }

  element.classList.add(morseEnabledClass)
}

function disableElements() {
  const elements = document.querySelectorAll('[id^="morse-element-"]')

  for (element of elements) {
    element.classList.remove(morseEnabledClass)
  }
}
