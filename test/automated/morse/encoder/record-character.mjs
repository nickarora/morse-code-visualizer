import { assert, refute } from "#test/automated/test-init"

import { Encoder, Character, Word } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Character", () => {
      describe("Current Character", () => {
        const encoder = Encoder.example()

        const character = Character.example()

        const controlWord = [character.toString()]

        encoder.currentCharacter = character

        encoder.recordCharacter()

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Updated", () => {
            assert.deepStrictEqual(currentWord, controlWord)
          })
        })

        describe("Current Character", () => {
          const currentCharacter = encoder.currentCharacter

          it("Cleared", () => {
            assert(currentCharacter.isEmpty())
          })
        })
      })

      describe("No Current Character", () => {
        const encoder = Encoder.example()

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
            assert(currentCharacter.isEmpty())
          })
        })
      })
    })
  })
})
