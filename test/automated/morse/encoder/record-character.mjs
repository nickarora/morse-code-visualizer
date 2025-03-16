import { assert } from "#test/automated/test-init"

import { Character, Word, Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Character", () => {
      describe("Current Character", () => {
        const encoder = new Encoder(Duration.example())

        const character = Character.example()

        encoder.currentCharacter = character

        encoder.recordCharacter()

        describe("Current Word", () => {
          const currentWord = encoder.currentWord
          const controlWord = [character]

          it("Updated", () => {
            assert.deepStrictEqual(currentWord, controlWord)
          })
        })


        describe("Current Character", () => {
          const currentCharacter = encoder.currentCharacter

          it("Unset", () => {
            assert.equal(currentCharacter, "")
          })
        })
      })

      describe("No Current Character", () => {
        const encoder = new Encoder(Duration.example())

        const controlWord = Word.example()
        encoder.currentWord = Array.from(controlWord)

        encoder.recordCharacter()

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Not changed", () => {
            assert.deepStrictEqual(currentWord, controlWord)
          })
        })

        describe("Current Character", () => {
          const currentCharacter = encoder.currentCharacter

          it("Not changed", () => {
            assert.equal(currentCharacter, "")
          })
        })
      })
    })
  })
})
