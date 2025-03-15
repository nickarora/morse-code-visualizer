import { assert } from "#test/automated/test-init"

import { Duration, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal On", () => {
      describe("No Start Time", () => {
        const encoder = new Encoder(Duration.example())

        encoder.stopSignalTime = Time.example()

        const controlCharacter = encoder.character

        encoder.readSignalOn()

        describe("Character", () => {
          const character = encoder.character

          it("Not changed", () => {
            assert.equal(character, controlCharacter)
          })
        })
      })
    })
  })
})
