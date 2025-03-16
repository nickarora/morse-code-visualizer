import { assert } from "#test/automated/test-init"

import { Duration, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal Off", () => {
      describe("No Start Time", () => {
        const encoder = new Encoder(Duration.example())

        encoder.stopSignalTime = Time.example()

        const controlCharacter = encoder.currentCharacter

        encoder.readSignalOff()

        describe("Current Character", () => {
          const currentCharacter = encoder.currentCharacter

          it("Not changed", () => {
            assert.equal(currentCharacter, controlCharacter)
          })
        })

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Not changed", () => {
            assert(currentWord.length == 0)
          })
        })

        describe("Previous Words", () => {
          const previousWords = encoder.previousWords

          it("Not changed", () => {
            assert(previousWords.length == 0)
          })
        })
      })
    })
  })
})
