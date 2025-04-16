import { assert, refute } from "#test/automated/test-init"

import { Duration, Element, Character } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Optional Probe", () => {
      describe("On Character Change", () => {
        describe("Append Element", () => {
          let effect
          let changedCharacter

          const onCharacterChange = (character) => {
            effect = "effect"
            changedCharacter = character
          }

          const encoder = new Encoder(Duration.example(), {
            onCharacterChange
          })

          const element = Element.example()
          encoder.appendElement(element)

          it("Invokes the callback", () => {
            refute(!effect)
          })

          describe("Changed Character", () => {
            it("Includes the added element", () => {
              const elements = changedCharacter.elements()

              assert.deepStrictEqual(elements, [element])
            })
          })
        })

        describe("Record Character", () => {
          let effect
          let changedCharacter

          const onCharacterChange = (character) => {
            effect = "effect"
            changedCharacter = character
          }

          const encoder = new Encoder(Duration.example(), {
            onCharacterChange
          })

          encoder.currentCharacter = Character.example()
          encoder.recordCharacter()

          it("Invokes the callback", () => {
            refute(!effect)
          })

          describe("Changed Character", () => {
            it("Empty character", () => {
              assert(changedCharacter.isEmpty())
            })
          })
        })
      })
    })
  })
})
