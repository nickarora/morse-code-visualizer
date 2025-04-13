import { assert } from "#test/automated/test-init"

import { Character } from "#controls"

import Word from "#src/morse/word"

describe("Word", () => {
  describe("For Each Character", () => {
    const firstCharacter = Character.example()
    const secondCharacter = Character.other()

    const word = new Word([
      firstCharacter,
      secondCharacter
    ])

    const seen = {
      [firstCharacter]: false,
      [secondCharacter]: false
    }

    word.forEachCharacter((character) => {
      seen[character] = true
    })

    const allSeen = Object.values(seen).every(seen => seen)

    it("Iterates over characters", () => {
      assert(allSeen)
    })
  })
})
