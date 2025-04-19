import { assert } from "#test/automated/test-init"

import { Encoder, Time, Element } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      describe("Current Character", () => {
        const encoder = Encoder.example()

        const startSignalTime = Time.example()
        encoder.startSignalTime = startSignalTime

        const stopSignalTime = Time.other()
        encoder.clock.set(stopSignalTime)

        const element = Element.example()
        encoder.signalReader.setElement(element)

        encoder.signalOff()

        const currentCharacter = encoder.currentCharacter

        it("Appended", () => {
          assert.equal(currentCharacter, element)
        })

        describe("Signal Reader", () => {
          const signalReader = encoder.signalReader
          const signalDuration = stopSignalTime - startSignalTime

          it("Read", () => {
            assert(signalReader.hasRead(signalDuration))
          })
        })
      })
    })
  })
})
