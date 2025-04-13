import { assert } from "#test/automated/test-init"

import { Word, Character } from "#controls"

describe("Morse", () => {
  describe("Word", () => {
    describe("Clear", () => {
      const character = Character.example()

      const word = Word.example([character])

      word.clear()

      const characters = word.characters()

      it("Cleared", () => {
        assert.deepStrictEqual(characters, [])
      })
    })
  })
})
