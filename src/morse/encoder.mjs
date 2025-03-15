import ensure from "../ensure.mjs"

import getElementDuration from "./encoder/get-element-duration.mjs"

class Encoder {
  constructor(elementDuration) {
    this.elementDuration = ensure(elementDuration)
  }

  static build(wordsPerMinute) {
    wordsPerMinute ||= 8

    const elementDuration = getElementDuration(wordsPerMinute)
    const instance = new Encoder(elementDuration)

    return instance
  }
}

export default Encoder
