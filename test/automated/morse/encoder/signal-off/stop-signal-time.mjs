import { assert } from "#test/automated/test-init"

import { Encoder, Time } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      describe("Stop Signal Time", () => {
        const encoder = Encoder.example()

        const clockTime = Time.other()
        encoder.clock.set(clockTime)

        encoder.signalOff()

        const stopSignalTime = encoder.stopSignalTime

        it("Clock time", () => {
          assert.equal(stopSignalTime, clockTime)
        })
      })
    })
  })
})
