import { assert } from "#test/automated/test-init"

import { Element } from "#controls"

import Character from "#src/morse/character"

describe("Character", () => {
  describe("Add Element", () => {
    const character = new Character()

    const controlElement = Element.example()

    character.addElement(controlElement)

    const elements = character.elements()

    it("Added", () => {
      assert.deepStrictEqual(elements, [controlElement])
    })
  })
})
