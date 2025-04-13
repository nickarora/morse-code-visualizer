import { assert, refute } from "#test/automated/test-init"

import { Word } from "#controls"

describe("Word", () => {
  describe("Is Empty", () => {
    describe("Affirmative", () => {
      const word = Word.example([])

      it("True", () => {
        assert(word.isEmpty())
      })
    })

    describe("Negative", () => {
      const word = Word.example()

      it("False", () => {
        refute(word.isEmpty())
      })
    })
  })
})
