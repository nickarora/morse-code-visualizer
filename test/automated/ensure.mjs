import { assert } from "#test/automated/test-init"

import ensure, { ArgumentError } from "#src/ensure"

describe("Ensure", () => {
  describe("Value Is Set", () => {
    const someValue = "Some Value"

    it("Is not an error", () => {
      ensure(someValue)
    })

    it("Returns the value", () => {
      assert.equal(someValue, ensure(someValue))
    })
  })

  describe("Value Is Null", () => {
    it("Is an error", () => {
      assert.throws(() => {
        ensure(null)
      }),
      ArgumentError
    })
  })

  describe("Value Is Undefined", () => {
    it("Is an error", () => {
      assert.throws(() => {
        ensure(undefined)
      }),
      ArgumentError
    })
  })
})
