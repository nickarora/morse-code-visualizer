import { assert } from "#test/automated/test-init"

import { Time, Duration, Element } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      const encoder = new Encoder(Duration.example())

      const startSignalTime = Time.example()
      encoder.startSignalTime = startSignalTime

      const stopSignalTime = Time.other()
      encoder.clock.set(stopSignalTime)

      const element = Element.example()
      encoder.signalReader.setElement(element)

      encoder.signalOff()

      describe("Current Character", () => {
        const currentCharacter = encoder.currentCharacter

        it("Appended", () => {
          assert.equal(currentCharacter, element)
        })
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
