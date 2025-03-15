import { assert } from "#test/automated/test-init"

import { Duration, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal Off", () => {
      describe("No Start Time", () => {
        const encoder = new Encoder(Duration.example())

        encoder.stopSignalTime = Time.example()

        const controlCharacter = encoder.character

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
