import { assert } from "#test/automated/test-init"

import { Duration, Character, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal Off", () => {
      describe("Signal Duration", () => {
        describe("Less Than Character Duration", () => {
          const encoder = new Encoder(Duration.example())

          const characterDuration = Duration.example()
          encoder.characterDuration = characterDuration

          encoder.startSignalTime = Time.example()
          encoder.stopSignalTime = Time.example({ offsetMilliseconds: -characterDuration + 1 })

          const controlCharacter = Character.example()
          encoder.currentCharacter = controlCharacter

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

          describe("Words", () => {
            const words = encoder.words

            it("Not changed", () => {
              assert(words.length == 0)
            })
          })
        })
      })
    })
  })
})
