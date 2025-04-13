import { assert } from "#test/automated/test-init"

import { Character } from "#controls"

import Word from "#src/morse/word"

describe("Word", () => {
  describe("Add Character", () => {
    const word = new Word()

    const controlCharacter = Character.example()

    word.addCharacter(controlCharacter)

    const characters = word.characters()

    it("Added", () => {
      assert.deepStrictEqual(characters, [controlCharacter])
    })
  })
})
