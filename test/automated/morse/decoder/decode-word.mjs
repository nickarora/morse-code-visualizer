import { assert } from "#test/automated/test-init"

import { Character, Word } from "#controls"

import Decoder from "#src/morse/decoder"

describe("Morse", () => {
  describe("Decoder", () => {
    describe("Decode Word", () => {
      const word = Word.example([
        Character.A.example(),
        Character.B.example()
      ])


      const decodedWord = Decoder.decodeWord(word)

      it("Decodes", () => {
        assert(decodedWord == "AB")
      })
    })
  })
})
