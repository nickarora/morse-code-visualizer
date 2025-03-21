import { assert, refute } from "#test/automated/test-init"

import { Character } from "#controls"

describe("Character", () => {
  describe("Has Elements", () => {
    describe("Affirmative", () => {
      const character = Character.example()

      it("True", () => {
        assert(character.hasElements())
      })
    })

    describe("Negative", () => {
      const character = Character.example()

      character.clear()

      it("False", () => {
        refute(character.hasElements())
      })
    })
  })
})
