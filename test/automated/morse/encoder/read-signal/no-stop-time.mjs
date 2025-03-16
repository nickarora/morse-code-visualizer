import { assert } from "#test/automated/test-init"

import { Duration, Time } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal", () => {
      describe("No Stop Time", () => {
        const encoder = new Encoder(Duration.example())

        encoder.startSignalTime = Time.example()

        const controlCharacter = encoder.currentCharacter

        encoder.readSignal()

        describe("Current Character", () => {
          const currentCharacter = encoder.currentCharacter

          it("Not changed", () => {
            assert.equal(currentCharacter, controlCharacter)
          })
        })
      })
    })
  })
})
