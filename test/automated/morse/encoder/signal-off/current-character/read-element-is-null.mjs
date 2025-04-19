import { assert } from "#test/automated/test-init"

import { Encoder, Time, Element } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      describe("Current Character", () => {
        describe("Read Element Is Null", () => {
          const encoder = Encoder.example()

          const startSignalTime = Time.example()
          encoder.startSignalTime = startSignalTime

          const stopSignalTime = Time.other()
          encoder.clock.set(stopSignalTime)

          encoder.signalReader.setElement(null)

          encoder.signalOff()

          const currentCharacter = encoder.currentCharacter

          it("No element appended", () => {
            assert(currentCharacter.isEmpty())
          })
        })
      })
    })
  })
})
