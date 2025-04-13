import { assert, refute } from "#test/automated/test-init"

import { Character } from "#controls"

describe("Character", () => {
  describe("Is Empty", () => {
    describe("Affirmative", () => {
      const character = Character.example()

      character.clear()

      it("True", () => {
        assert(character.isEmpty())
      })
    })

    describe("Negative", () => {
      const character = Character.example()

      it("False", () => {
        refute(character.isEmpty())
      })
    })
  })
})
