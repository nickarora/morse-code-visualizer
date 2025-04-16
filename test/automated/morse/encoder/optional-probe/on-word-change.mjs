import { assert, refute } from "#test/automated/test-init"

import { Duration, Character, Word } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Optional Probe", () => {
      describe("On Word Change", () => {
        describe("Record Character", () => {
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
              console.log("CHANGED WORD", changedWord)
              const characters = changedWord.characters()

              assert.deepStrictEqual(characters, [character])
            })
          })
        })

        describe("On Word Added", () => {
          let effect
          let changedWord

          const onWordChange = (word) => {
            effect = "effect"
            changedWord = word
          }

          const encoder = new Encoder(Duration.example(), {
            onWordChange
          })

          encoder.currentWord = Word.example()
          encoder.recordWord()

          it("Invokes the callback", () => {
            refute(!effect)
          })

          describe("Changed Word", () => {
            it("Empty word", () => {
              assert(changedWord.isEmpty())
            })
          })
        })
      })
    })
  })
})
