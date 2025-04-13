import { assert } from "#test/automated/test-init"

import { Character } from "#controls"

import Word from "#src/morse/word"

describe("Word", () => {
  describe("To String", () => {
    const word = new Word()

    const character = Character.example()
    const otherCharacter = Character.other()

    word.addCharacter(character)
    word.addCharacter(otherCharacter)

    const wordString = word.toString()
    const controlString = `${character.toString()}${otherCharacter.toString()}`

    it("Is the expected string", () => {
      assert.equal(wordString, controlString)
    })
  })
})
