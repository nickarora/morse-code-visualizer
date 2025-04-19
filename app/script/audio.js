const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

function isAudioSuspended() {
  return audioCtx.state === 'suspended'
}

function createOscillator() {
  const frequency = 600

  const oscillator = audioCtx.createOscillator()

  oscillator.type = 'sine'

  const currentTime = audioCtx.currentTime
  oscillator.frequency.setValueAtTime(frequency, currentTime)

  const destination = audioCtx.destination
  oscillator.connect(destination)

  return oscillator
}

let morseOscillator

function startBeep() {
  if (isAudioSuspended()) {
    audioCtx.resume()
  }

  if (!morseOscillator) {
    morseOscillator = createOscillator()
  }

  morseOscillator.start()
}

function stopBeep() {
  if (!morseOscillator) {
    return
  }

  morseOscillator.stop()
  morseOscillator.disconnect()
  morseOscillator = null
}
