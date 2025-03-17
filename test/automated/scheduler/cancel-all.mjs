import { assert } from "#test/automated/test-init"

import Scheduler from "#src/scheduler"

import { Duration } from "#controls"

describe("Scheduler", () => {
  describe("Cancel All", () => {
    const scheduler = new Scheduler()

    let effect = null

    const duration = Duration.example()

    scheduler.schedule(() => {
      effect = '_'
    }, duration)

    scheduler.cancelAll()

    it('Does not execute the scheduled task', (done) => {
      setTimeout(() => {
        assert.equal(effect, null)
        done()
      }, duration + 1)
    })
  })
})

