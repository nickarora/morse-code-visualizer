import { assert } from "#test/automated/test-init"

import { Encoder } from "#controls"

import getElementDuration from "#src/morse/encoder/get-element-duration"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Set Words Per Minute", () => {
      const encoder = Encoder.example()

      const wordsPerMinute = 111
      encoder.setWordsPerMinute(wordsPerMinute)

      const controlElementDuration = getElementDuration(wordsPerMinute)

      it("Element duration", () => {
        assert(encoder.elementDuration == controlElementDuration)
      })

      const controlCharacterDuration = controlElementDuration * 3

      it("Character duration", () => {
        assert(encoder.characterDuration == controlCharacterDuration)
      })

      const controlWordDuration = controlElementDuration * 7

      it("Word duration", () => {
        assert(encoder.wordDuration == controlWordDuration)
      })
    })
  })
})
