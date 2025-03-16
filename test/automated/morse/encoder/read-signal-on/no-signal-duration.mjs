import { assert } from "#test/automated/test-init"

import { Duration, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal On", () => {
      describe("No Signal Duration", () => {
        const encoder = new Encoder(Duration.example())

        encoder.startSignalTime = Time.example()
        encoder.stopSignalTime = Time.example()

        const controlCharacter = encoder.currentCharacter

        encoder.readSignalOn()

        describe("Current Character", () => {
          const character = encoder.currentCharacter

          it("Not changed", () => {
            assert.equal(character, controlCharacter)
          })
        })
      })
    })
  })
})
