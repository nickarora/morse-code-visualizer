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

function addSettingsListeners(morseEncoder, wordsPerMinute) {
  const settingsButton = document.getElementById("settings-toggle")
  const mainElement = document.querySelector("main")

  settingsButton.addEventListener("click", (_e) => {
    mainElement.classList.toggle("settings-open")
  })
  const wordsPerMinuteInput = document.querySelector(".words-per-minute input")
  wordsPerMinuteInput.value = wordsPerMinute

  const wordsPerMinuteValue = document.querySelector(".words-per-minute .value")
  wordsPerMinuteValue.textContent = wordsPerMinute

  wordsPerMinuteInput.addEventListener('input', (e) => {
    const wordsPerMinute = parseInt(e.target.value)

    morseEncoder.setWordsPerMinute(wordsPerMinute)
    wordsPerMinuteValue.textContent = wordsPerMinute
  })
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

  signalButton.addEventListener('pointerdown', (e) => {
    e.target.releasePointerCapture(e.pointerId)
    signalOn()
  })

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

  addAnimationListeners()
  addSignalButtonListener(morseEncoder)
  addSettingsListeners(morseEncoder, wordsPerMinute)

  return morseEncoder
}
