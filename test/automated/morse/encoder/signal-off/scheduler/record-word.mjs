import { assert } from "#test/automated/test-init"

import { Encoder } from "#controls"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      describe("Scheduler", () => {
        describe("Record Word", () => {
          const encoder = Encoder.example()

          encoder.signalOff()

          const scheduler = encoder.scheduler

          const scheduled = scheduler.hasScheduled(
            encoder.recordWord.bind(encoder),
            encoder.characterDuration + encoder.wordDuration
          )

          it('Record character scheduled', () => {
            assert(scheduled)
          })
        })
      })
    })
  })
})
