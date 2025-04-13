import { assert } from "#test/automated/test-init"

import { Element } from "#controls"

import Character from "#src/morse/character"

describe("Character", () => {
  describe("Elements", () => {
    const controlElement = Element.example()

    const character = new Character([controlElement])

    const elements = character.elements()

    it("Added", () => {
      assert.deepStrictEqual(elements, [controlElement])
    })
  })
})
