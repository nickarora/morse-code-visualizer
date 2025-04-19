function addAnimationListeners() {
  const elements = document.querySelectorAll('[id^="morse-element-"]')

  for (element of elements) {
    element.addEventListener('animationend', (event) => {
      if (event.animationName === 'elementOffAnimation') {
        stopMorseDisablingAnimation(event.target.parentElement)
      }
    })
  }
}

function addSignalButtonListener(morseEncoder) {
  let signal = false

  function signalOn() {
    if (signal) {
      return
    }

    signal = true
    morseEncoder.signalOn()
    startBeep()
  }

  function signalOff() {
    if (!signal) {
      return
    }

    signal = false
    morseEncoder.signalOff()
    stopBeep()
  }

  const signalButton = document.getElementById("signal-on")

  signalButton.addEventListener('pointerdown', signalOn)
  signalButton.addEventListener('pointerup', signalOff)
  signalButton.addEventListener('pointerleave', signalOff)

  signalButton.addEventListener('keydown', (e) => {
    if (e.key === ' ') signalOn()
  })

  signalButton.addEventListener('keyup', (e) => {
    if (e.key === ' ') signalOff()
  })
}

function startMorseCodeVisualizer(wordsPerMinute) {
  wordsPerMinute ||= 7

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
  addAnimationListeners()

  return morseEncoder
}
