import { assert } from "#test/automated/test-init"

import { Element } from "#controls"

import Character from "#src/morse/character"

describe("Character", () => {
  describe("To String", () => {
    const character = new Character()

    const dit = Element.dit()
    const dah = Element.dah()

    character.addElement(dit)
    character.addElement(dah)

    const characterString = character.toString()

    it("Added", () => {
      assert.equal(characterString, ".-")
    })
  })
})
