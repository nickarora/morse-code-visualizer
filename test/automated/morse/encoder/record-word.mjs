import { assert } from "#test/automated/test-init"

import { Word, Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Word", () => {
      describe("Has Word", () => {
        const encoder = new Encoder(Duration.example())

        const word = Word.example()
        encoder.currentWord = Array.from(word)

        encoder.recordWord()

        describe("Words", () => {
          const words = encoder.words
          const controlWords = [word]

          it("Updated", () => {
            assert.deepStrictEqual(words, controlWords)
          })
        })

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Cleared", () => {
            assert(currentWord.length == 0)
          })
        })
      })

      describe("Has No Word", () => {
        const encoder = new Encoder(Duration.example())

        encoder.recordWord()

        describe("Words", () => {
          const words = encoder.words

          it("Not changed", () => {
            assert(words.length == 0)
          })
        })

        describe("Current Word", () => {
          const currentWord = encoder.currentWord

          it("Not changed", () => {
            assert(currentWord.length == 0)
          })
        })
      })
    })
  })
})
