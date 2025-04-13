import { assert } from "#test/automated/test-init"

import { Word, Character } from "#controls"

describe("Word", () => {
  describe("Dup", () => {
    const character = Character.example()

    const word = Word.example([character])

    const duplicateWord = word.dup()

    const duplicateWordCharacters = duplicateWord.characters()

    it("Different Word", () => {
      assert(word != duplicateWord)
    })

    it("Same Characters", () => {
      assert.deepStrictEqual(duplicateWordCharacters, [character])
    })
  })
})
