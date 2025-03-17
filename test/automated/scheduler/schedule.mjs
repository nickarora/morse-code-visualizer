import { refute } from "#test/automated/test-init"

import Scheduler from "#src/scheduler"

import { Duration } from "#controls"

describe("Scheduler", () => {
  describe("Schedule", () => {
    const scheduler = new Scheduler()

    let effect = null

    const duration = Duration.example()

    scheduler.schedule(() => {
      effect = '_'
    }, duration)

    it('Executes the scheduled task', (done) => {
      setTimeout(() => {
        refute.equal(effect, null)
        done()
      }, duration + 1)
    })
  })
})

