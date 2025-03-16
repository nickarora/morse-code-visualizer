import { assert } from "#test/automated/test-init"

import Clock from "#src/clock"

describe("Clock", () => {
  describe("Now", () => {
    const clock = new Clock

    const currentTime = new Date().getTime();
    const clockTime = clock.now()

    // Allow a small margin of error to account for execution time
    const isCurrentTime = Math.abs(currentTime - clockTime) < 10

    it('Returns the current Time', () => {
      assert.ok(isCurrentTime)
    })
  })
})
