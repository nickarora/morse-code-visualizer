import { assert } from "#test/automated/test-init"

import { Duration, Character, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal Off", () => {
      describe("Signal Duration", () => {
        describe("Greater Than Character Duration", () => {
          describe("Greater Than Word Duration", () => {
            const encoder = new Encoder(Duration.example())

            const characterDuration = Duration.example()
            encoder.characterDuration = characterDuration

            const wordDuration = characterDuration
            encoder.wordDuration = wordDuration

            encoder.startSignalTime = Time.example()
            encoder.stopSignalTime = Time.example({ offsetMilliseconds: -characterDuration - 1 })

            const controlCharacter = Character.example()
            encoder.currentCharacter = controlCharacter

            encoder.readSignalOff()

            describe("Current Character", () => {
              const currentCharacter = encoder.currentCharacter

              it("Cleared", () => {
                assert.equal(currentCharacter, "")
              })
            })

            describe("Current Word", () => {
              const currentWord = encoder.currentWord

              it("Empty", () => {
                assert(currentWord.length == 0)
              })
            })

            describe("Words", () => {
              const words = encoder.words

              const controlWord = [controlCharacter]
              const controlWords = [controlWord]

              it("Word added", () => {
                assert.deepStrictEqual(words, controlWords)
              })
            })
          })
        })
      })
    })
  })
})
