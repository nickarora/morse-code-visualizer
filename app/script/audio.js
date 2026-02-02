const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const gainNode = audioCtx.createGain()
gainNode.connect(audioCtx.destination)
gainNode.gain.value = 0.5

function isAudioSuspended() {
  return audioCtx.state === 'suspended'
}

function createOscillator() {
  const frequency = 600

  const oscillator = audioCtx.createOscillator()

  oscillator.type = 'sine'

  const currentTime = audioCtx.currentTime
  oscillator.frequency.setValueAtTime(frequency, currentTime)

  oscillator.connect(gainNode)

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

function setVolume(value) {
  gainNode.gain.value = value / 100
}
