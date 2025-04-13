import { assert } from "#test/automated/test-init"

import { Character } from "#controls"

import Decoder from "#src/morse/decoder"

describe("Morse", () => {
  describe("Decoder", () => {
    describe("Decode Character", () => {
      const scenarios = [
        ["A", ".-"],
        ["B", "-..."],
        ["C", "-.-."],
        ["D", "-.."],
        ["E", "."],
        ["F", "..-."],
        ["G", "--."],
        ["H", "...."],
        ["I", ".."],
        ["J", ".---"],
        ["K", "-.-"],
        ["L", ".-.."],
        ["M", "--"],
        ["N", "-."],
        ["O", "---"],
        ["P", ".--."],
        ["Q", "--.-"],
        ["R", ".-."],
        ["S", "..."],
        ["T", "-"],
        ["U", "..-"],
        ["V", "...-"],
        ["W", ".--"],
        ["X", "-..-"],
        ["Y", "-.--"],
        ["Z", "--.."]
      ]

      for (const [character, code] of scenarios) {
        const elements = code.split()

        const decodedCharacter = Decoder.decodeCharacter(
          Character.example(elements)
        )

        it(character, () => {
          assert(decodedCharacter == character)
        })
      }

      describe("Other", () => {
        const unknownElements = ":_"

        const decodedCharacter = Decoder.decodeCharacter(
          Character.example(unknownElements.split())
        )

        it("Empty String", () => {
          assert(decodedCharacter === "")
        })
      })
    })
  })
})
