import ensure from "../ensure.mjs"

import getElementDuration from "./encoder/get-element-duration.mjs"
import Clock, { SubstituteClock } from "../clock.mjs"
import Scheduler, { SubstituteScheduler } from "../scheduler.mjs"
import SignalReader, { SubstituteSignalReader } from "./encoder/signal-reader.mjs"
import Character from "./character.mjs"
import Word from "./word.mjs"

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

    this.currentCharacter = new Character()
    this.currentWord = new Word()
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
    this.currentCharacter.addElement(element)
  }

  recordCharacter() {
    if (!this.currentCharacter.isEmpty()) {
      this.currentWord.addCharacter(this.currentCharacter)
    }

    this.currentCharacter = new Character()
  }

  recordWord() {
    if (!this.currentWord.isEmpty()) {
      this.previousWords.push(this.currentWord)
    }

    this.currentWord = new Word()
  }
}

export default Encoder
