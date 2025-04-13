import { assert } from "#test/automated/test-init"

import { Encoder, Word } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Record Word", () => {
      describe("Has Word", () => {
        const encoder = Encoder.example()

        const word = Word.example()
        encoder.currentWord = word

        encoder.recordWord()

        describe("Previous Words", () => {
          const previousWords = encoder.previousWords

          it("Updated", () => {
            assert.deepStrictEqual(previousWords, [word])
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
        const encoder = Encoder.example()

        assert(encoder.previousWords.length == 0)
        assert(encoder.currentWord.length == 0)

        encoder.recordWord()

        describe("Previous Words", () => {
          const previousWords = encoder.previousWords

          it("Not changed", () => {
            assert(previousWords.length == 0)
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
