import { assert } from "#test/automated/test-init"

import { WordsPerMinute } from "#controls"

import getElementDuration from "#src/morse/encoder/get-element-duration"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Get Element Duration", () => {
      const wordsPerMinute = WordsPerMinute.example()
      const elementDuration = getElementDuration(wordsPerMinute)

      const controlDuration = (1.2 / wordsPerMinute) * 1000

      it("Calculates", () => {
        assert.equal(elementDuration, controlDuration)
      })
    })
  })
})
