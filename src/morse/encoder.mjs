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
    this.currentWord = []
    this.previousWords = []

    // this.addCharacterTimeoutID = null
    // this.addWordTimeoutID = null
  }

  signalOn() {
    // clearTimeout(this.addCharacterTimeoutID)
    // clearTimeout(this.addWordTimeoutID)

    this.startSignalTime = new Date().getTime()
  }

  signalOff() {
    this.stopSignalTime = new Date().getTime()

    this.readSignal()

    // this.addCharacterTimeoutID = setTimeout(() => {
    //   this.recordCharacter()
    // }, this.characterDuration)

    // this.addWordTimeoutID = setTimeout(() => {
    //   this.recordWord()
    // }, this.characterDuration + this.wordDuration)
  }

  readSignal() {
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
