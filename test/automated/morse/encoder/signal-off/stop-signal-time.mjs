import { assert } from "#test/automated/test-init"

import { Time, Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      const encoder = new Encoder(Duration.example())

      const clockTime = Time.other()
      encoder.clock.set(clockTime)

      encoder.signalOff()

      describe("Stop Signal Time", () => {
        const stopSignalTime = encoder.stopSignalTime

        it("Clock time", () => {
          assert.equal(stopSignalTime, clockTime)
        })
      })
    })
  })
})
