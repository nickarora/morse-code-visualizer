import { assert } from "#test/automated/test-init"

import { Character, Element } from "#controls"

describe("Character", () => {
  describe("Dup", () => {
    const element = Element.example()

    const character = Character.example([element])

    const duplicateCharacter = character.dup()

    const duplicateCharacterElements = duplicateCharacter.elements()

    it("Different Character", () => {
      assert(character != duplicateCharacter)
    })

    it("Same Elements", () => {
      assert.deepStrictEqual(duplicateCharacterElements, [element])
    })
  })
})
