import { assert } from "#test/automated/test-init"

import { Encoder, Time } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal On", () => {
      const encoder = Encoder.example()

      const clockTime = Time.example()
      encoder.clock.set(clockTime)

      encoder.signalOn()

      describe("Start Signal Time", () => {
        const startSignalTime = encoder.startSignalTime

        it('Clock time', () => {
          assert.equal(startSignalTime, clockTime)
        })
      })

      describe('Scheduler', () => {
        const scheduler = encoder.scheduler

        it('Scheduled tasks canceled', () => {
          assert(scheduler.hasCanceledAll())
        })
      })
    })
  })
})
