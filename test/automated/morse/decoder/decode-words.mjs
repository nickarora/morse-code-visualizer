import { assert } from "#test/automated/test-init"

import { Character, Word } from "#controls"

import Decoder from "#src/morse/decoder"

describe("Morse", () => {
  describe("Decoder", () => {
    describe("Decode Words", () => {
      const word = Word.example([
        Character.A.example()
      ])

      const otherWord = Word.example([
        Character.B.example()
      ])

      const decodedWords = Decoder.decodeWords([word, otherWord])

      it("Decodes", () => {
        assert(decodedWords == "A B")
      })
    })
  })
})
