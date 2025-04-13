import { assert } from "#test/automated/test-init"

import { Element } from "#controls"

import Character from "#src/morse/character"

describe("Character", () => {
  describe("For Each Element", () => {
    const firstElement = Element.dit()
    const secondElement = Element.dah()

    const character = new Character([
      firstElement,
      secondElement
    ])

    const seen = {
      [firstElement]: false,
      [secondElement]: false
    }

    character.forEachElement((element) => {
      seen[element] = true
    })

    const allSeen = Object.values(seen).every(seen => seen)

    it("Iterates over elements", () => {
      assert(allSeen)
    })
  })
})
