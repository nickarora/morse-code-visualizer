const bulbClass = "bulb"
const morseEnabledClass = "on"
const morseDisablingClass = "turning-off"

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
    if (element.classList.contains(morseEnabledClass)) {
      removeClass(element, morseEnabledClass)
      addClass(element, morseDisablingClass)
    }
  }
}

function addAnimationListeners() {
  const elements = document.querySelectorAll('[id^="morse-element-"]')

  for (element of elements) {
    element.addEventListener('animationend', (event) => {
      if (event.animationName === 'elementOffAnimation') {
        const element = event.target
        const parent = element.parentElement

        if (element.classList.contains(bulbClass) && parent.classList.contains(morseDisablingClass)) {
          removeClass(parent, morseDisablingClass)
        }
      }
    })
  }
}

function addSignalButtonListener(morseEncoder) {
  const signalButton = document.getElementById("signal-on")

  signalButton.addEventListener('pointerdown', () => {
    morseEncoder.signalOn()
  })

  signalButton.addEventListener('pointerup', () => {
    morseEncoder.signalOff()
  })

  signalButton.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      morseEncoder.signalOn()
    }
  })

  signalButton.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
      morseEncoder.signalOff()
    }
  })
}

function startMorseCodeVisualizer() {
  addAnimationListeners()

  const wordsPerMinute = 5

  const morseEncoder = Morse.Encoder.build(wordsPerMinute, {
    onCharacterChange: (character) => {
      if (character.isEmpty()) {
        disableCharacters()
        return
      }

      const decodedCharacter = Morse.Decoder.decodeCharacter(character)
      enableCharacter(decodedCharacter)
    }
  })

  addSignalButtonListener(morseEncoder)

  return morseEncoder
}
