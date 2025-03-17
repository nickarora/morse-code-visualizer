import ensure from "../ensure.mjs"

import getElementDuration from "./encoder/get-element-duration.mjs"
import Clock, { SubstituteClock } from "../clock.mjs"
import Scheduler, { SubstituteScheduler } from "../scheduler.mjs"
import SignalReader, { SubstituteSignalReader } from "./encoder/signal-reader.mjs"

class Encoder {
  static build(wordsPerMinute) {
    wordsPerMinute ||= 8

    const elementDuration = getElementDuration(wordsPerMinute)

    const instance = new Encoder(elementDuration)

    Clock.configure(instance)
    Scheduler.configure(instance)
    SignalReader.configure(instance, elementDuration)

    return instance
  }

  constructor(elementDuration) {
    this.elementDuration = ensure(elementDuration)

    this.characterDuration = elementDuration * 3
    this.wordDuration = elementDuration * 7

    this.startSignalTime = null
    this.stopSignalTime = null

    this.currentCharacter = ""
    this.currentWord = []
    this.previousWords = []

    SubstituteClock.configure(this)
    SubstituteScheduler.configure(this)
    SubstituteSignalReader.configure(this)
  }

  signalOn() {
    this.scheduler.cancelAll()

    this.startSignalTime = this.clock.now()
  }

  signalOff() {
    this.stopSignalTime = this.clock.now()

    this.readSignal()

    this.scheduler.schedule(
      this.recordCharacter.bind(this),
      this.characterDuration
    )

    this.scheduler.schedule(
      this.recordWord.bind(this),
      this.characterDuration + this.wordDuration
    )
  }

  readSignal() {
    if (!this.startSignalTime || !this.stopSignalTime) {
      return
    }

    const signalDuration = this.stopSignalTime - this.startSignalTime
    const element = this.signalReader.read(signalDuration)

    this.appendElement(element)
  }

  appendElement(element) {
    this.currentCharacter = this.currentCharacter.concat(element)
  }

  recordCharacter() {
    if (this.currentCharacter.length > 0) {
      this.currentWord.push(this.currentCharacter)
    }

    this.currentCharacter = ""
  }

  recordWord() {
    if (this.currentWord.length > 0) {
      this.previousWords.push(this.currentWord)
    }

    this.currentWord = []
  }
}

export default Encoder
