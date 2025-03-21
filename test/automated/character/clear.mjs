import { assert, refute } from "#test/automated/test-init"

import { Character } from "#controls"

describe("Character", () => {
  describe("Clear", () => {
    const character = Character.example()

    assert(character.hasElements())

    character.clear()

    it("Cleared", () => {
      refute(character.hasElements())
    })
  })
})
