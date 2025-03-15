import { assert } from "#test/automated/test-init"

import { WordsPerMinute } from "#controls"

import Encoder from "#src/morse/encoder"
import getElementDuration from "#src/morse/encoder/get-element-duration"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Build", () => {
      describe("Element Duration", () => {
        describe("Words Per Minute Specified", () => {
          const wordsPerMinute = WordsPerMinute.example()

          const morse = Encoder.build(wordsPerMinute)

          const elementDuration = morse.elementDuration
          const controlDuration = getElementDuration(wordsPerMinute)

          it("Calculated using specified words per minute", () => {
            assert.equal(elementDuration, controlDuration)
          })
        })

        describe("Words Per Minute Omitted", () => {
          const morse = Encoder.build()

          const elementDuration = morse.elementDuration

          const wordsPerMinute = 8
          const controlDuration = getElementDuration(wordsPerMinute)

          it("Calculated using 8 words per minute", () => {
            assert.equal(elementDuration, controlDuration)
          })
        })
      })
    })
  })
})
