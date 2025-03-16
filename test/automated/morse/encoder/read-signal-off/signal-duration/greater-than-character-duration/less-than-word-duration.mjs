import { assert } from "#test/automated/test-init"

import { Duration, Character, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal Off", () => {
      describe("Signal Duration", () => {
        describe("Greater Than Character Duration", () => {
          describe("Less Than Word Duration", () => {
            const encoder = new Encoder(Duration.example())

            const characterDuration = Duration.example()
            encoder.characterDuration = characterDuration

            const wordDuration = characterDuration + 2
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

            describe("Word", () => {
              const word = encoder.word
              const controlWord = [controlCharacter]

              it("Empty", () => {
                assert.deepStrictEqual(word, controlWord)
              })
            })

            describe("Words", () => {
              const words = encoder.words

              it("Not added", () => {
                assert(words.length == 0)
              })
            })
          })
        })
      })
    })
  })
})
