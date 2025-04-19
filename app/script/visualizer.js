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
  let spacebarPressed

  const signalButton = document.getElementById("signal-on")

  signalButton.addEventListener('pointerdown', () => {
    morseEncoder.signalOn()
  })

  signalButton.addEventListener('pointerup', () => {
    morseEncoder.signalOff()
  })

  signalButton.addEventListener('keydown', (e) => {
    if (e.key === ' ' && !spacebarPressed) {
      spacebarPressed = true
      morseEncoder.signalOn()
    }
  })

  signalButton.addEventListener('keyup', (e) => {
    if (e.key === ' ' && spacebarPressed) {
      spacebarPressed = false
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
        updateCurrentCharacter('')
        return
      }

      const decodedCharacter = Morse.Decoder.decodeCharacter(character)
      enableCharacter(decodedCharacter)
      updateCurrentCharacter(decodedCharacter)
    },
    onWordChange: (word) => {
      if (word.isEmpty()) {
        updateCurrentWord('')
        return
      }

      const decodedWord = Morse.Decoder.decodeWord(word)
      updateCurrentWord(decodedWord)
    },
    onWordAdded: (words) => {
      const decodedWords = Morse.Decoder.decodeWords(words)
      updatePreviousWords(decodedWords)
    }
  })

  addSignalButtonListener(morseEncoder)

  return morseEncoder
}
