import { assert } from "#test/automated/test-init"

import { Word, Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Word", () => {
      describe("Has Word", () => {
        const encoder = new Encoder(Duration.example())

        const word = Word.example()
        encoder.word = Array.from(word)

        encoder.recordWord()

        describe("Words", () => {
          const words = encoder.words
          const controlWords = [word]

          it("Updated", () => {
            assert.deepStrictEqual(words, controlWords)
          })
        })


        describe("Word", () => {
          const word = encoder.word

          it("No Characters", () => {
            assert(word.length == 0)
          })
        })
      })

      describe("Has No Word", () => {
        const encoder = new Encoder(Duration.example())

        encoder.recordWord()

        describe("Word", () => {
          const word = encoder.word

          it("Not changed", () => {
            assert(word.length == 0)
          })
        })

        describe("Word", () => {
          const word = encoder.word

          it("No Characters", () => {
            assert(word.length == 0)
          })
        })
      })
    })
  })
})
