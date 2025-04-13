import { assert, refute } from "#test/automated/test-init"

import { Encoder, Character, Word } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Character", () => {
      describe("Current Character", () => {
        const encoder = Encoder.example()

        encoder.currentWord = Word.New.example()

        const character = Character.example()

        encoder.currentCharacter = character

        encoder.recordCharacter()

        describe("Current Word", () => {
          const currentWord = encoder.currentWord
          const characters = currentWord.characters()

          it("Updated", () => {
            assert.deepStrictEqual(characters, [character])
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

        encoder.currentWord = Word.example()

        encoder.recordCharacter()

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Not changed", () => {
            assert.deepStrictEqual(currentWord, Word.example())
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
