import { assert } from "#test/automated/test-init"

import { Character, Word, Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Character", () => {
      describe("Has Character", () => {
        const encoder = new Encoder(Duration.example())

        const character = Character.example()

        encoder.character = character

        encoder.recordCharacter()

        describe("Word", () => {
          const word = encoder.word
          const controlWord = [character]

          it("Updated", () => {
            assert.deepStrictEqual(word, controlWord)
          })
        })


        describe("Character", () => {
          const character = encoder.character

          it("Empty string", () => {
            assert.equal(character, "")
          })
        })
      })

      describe("Has No Character", () => {
        const encoder = new Encoder(Duration.example())

        const controlWord = Word.example()
        encoder.word = Array.from(controlWord)

        encoder.recordCharacter()

        describe("Word", () => {
          const word = encoder.word

          it("Not changed", () => {
            assert.deepStrictEqual(word, controlWord)
          })
        })

        describe("Character", () => {
          const character = encoder.character

          it("Empty string", () => {
            assert.equal(character, "")
          })
        })
      })
    })
  })
})
