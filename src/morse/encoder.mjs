import ensure from "../ensure.mjs"

import getElementDuration from "./encoder/get-element-duration.mjs"

import Element from "./element.mjs"

class Encoder {
  static build(wordsPerMinute) {
    wordsPerMinute ||= 8

    const elementDuration = getElementDuration(wordsPerMinute)
    const instance = new Encoder(elementDuration)

    return instance
  }

  constructor(elementDuration) {
    this.elementDuration = ensure(elementDuration)

    this.characterDuration = elementDuration * 3
    this.wordDuration = elementDuration * 7

    this.startSignalTime = null
    this.stopSignalTime = null

    this.currentCharacter = ""
    this.word = []
    this.words = []
  }

  signalOn() {
    this.startSignalTime = new Date().getTime()

    this.readSignalOff()
  }

  signalOff() {
    this.stopSignalTime = new Date().getTime()

    this.readSignalOn()
  }

  readSignalOn() {
    if (!this.startSignalTime || !this.stopSignalTime) {
      return
    }

    const signalDuration = this.stopSignalTime - this.startSignalTime

    if (signalDuration <= 0) {
      return
    }

    let element

    if (signalDuration <= this.elementDuration) {
      element = Element.dit
    } else {
      element = Element.dah
    }

    this.currentCharacter = this.currentCharacter.concat(element)
  }

  readSignalOff() {
    if (!this.startSignalTime || !this.stopSignalTime) {
      return
    }

    const signalDuration = this.startSignalTime - this.stopSignalTime

    if (signalDuration < 0 || signalDuration <= this.characterDuration) {
      return
    }

    this.recordCharacter()

    if (signalDuration > this.wordDuration) {
      this.recordWord()
    }
  }

  recordCharacter() {
    if (this.currentCharacter.length > 0) {
      this.word.push(this.currentCharacter)
    }

    this.currentCharacter = ""
  }

  recordWord() {
    if (this.word.length > 0) {
      this.words.push(this.word)
    }

    this.word = []
  }
}

export default Encoder
