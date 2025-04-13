import { assert, refute } from "#test/automated/test-init"

import { Duration, Word } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Optional Probe", () => {
      describe("On Word Added", () => {
        let effect
        let updatedWords

        const onWordAdded = (words) => {
          effect = "effect"
          updatedWords = words
        }

        const encoder = new Encoder(Duration.example(), {
          onWordAdded
        })

        const word = Word.example()
        encoder.currentWord = word

        encoder.recordWord()

        it("Invokes the callback", () => {
          refute(!effect)
        })

        describe("Updated Words", () => {
          it("Includes the added word", () => {
            assert.deepStrictEqual(updatedWords, [word])
          })
        })
      })
    })
  })
})
