import { assert } from "#test/automated/test-init"

import { Duration } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Off", () => {
      describe("Scheduler", () => {
        describe("Record Character", () => {
          const encoder = new Encoder(Duration.example())

          encoder.signalOff()

          const scheduler = encoder.scheduler

          const scheduled = scheduler.hasScheduled(
            encoder.recordCharacter.bind(encoder),
            encoder.characterDuration
          )

          it('Record character scheduled', () => {
            assert(scheduled)
          })
        })
      })
    })
  })
})
