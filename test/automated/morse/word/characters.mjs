import { assert } from "#test/automated/test-init"

import { Character } from "#controls"

import Word from "#src/morse/word"

describe("Word", () => {
  describe("Characters", () => {
    const controlCharacter = Character.example()

    const word = new Word([controlCharacter])

    const characters = word.characters()

    it("Added", () => {
      assert.deepStrictEqual(characters, [controlCharacter])
    })
  })
})
