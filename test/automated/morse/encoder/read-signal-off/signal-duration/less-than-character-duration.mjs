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
          encoder.character = controlCharacter

          encoder.readSignalOff()

          describe("Character", () => {
            const character = encoder.character

            it("Not changed", () => {
              assert.equal(character, controlCharacter)
            })
          })

          describe("Word", () => {
            const word = encoder.word

            it("Not changed", () => {
              assert(word.length == 0)
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
