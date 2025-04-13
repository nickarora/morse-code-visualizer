import { assert } from "#test/automated/test-init"

import { Character, Element } from "#controls"

describe("Character", () => {
  describe("Clear", () => {
    const element = Element.example()

    const character = Character.example([element])

    character.clear()

    const elements = character.elements()

    it("Cleared", () => {
      assert.deepStrictEqual(elements, [])
    })
  })
})
