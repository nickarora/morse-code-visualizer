import { assert } from "#test/automated/test-init"

import { Encoder, Time } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      const encoder = Encoder.example()

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
