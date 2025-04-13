import { assert, refute } from "#test/automated/test-init"

import { Duration, Character } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Optional Probe", () => {
      describe("On Word Change", () => {
        let effect
        let changedWord

        const onWordChange = (word) => {
          effect = "effect"
          changedWord = word
        }

        const encoder = new Encoder(Duration.example(), {
          onWordChange
        })

        const character = Character.example()
        encoder.currentCharacter = character

        encoder.recordCharacter()

        it("Invokes the callback", () => {
          refute(!effect)
        })

        describe("Changed Word", () => {
          it("Includes the added character", () => {
            const characters = changedWord.characters()

            assert.deepStrictEqual(characters, [character])
          })
        })
      })
    })
  })
})
