import ArgumentError from "./argument-error.mjs"
import getElementDuration from "./encoder/get-element-duration.mjs"

class Encoder {
  constructor(elementDuration) {
    if (elementDuration == null) {
      throw new ArgumentError()
    }

    this.elementDuration = elementDuration
  }

  static build(wordsPerMinute) {
    wordsPerMinute ||= 8

    const elementDuration = getElementDuration(wordsPerMinute)
    const instance = new Encoder(elementDuration)

    return instance
  }
}

export default Encoder
