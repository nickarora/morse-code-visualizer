import { assert } from "#test/automated/test-init"

import { Duration, Time, Element } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal On", () => {
      describe("Signal Duration", () => {
        describe("Less Than Element Duration", () => {
          const elementDuration = Duration.example()
          const encoder = new Encoder(elementDuration)

          encoder.startSignalTime = Time.example()

          encoder.stopSignalTime = Time.example({
            offsetMilliseconds: elementDuration - 1
          })

          encoder.readSignalOn()

          describe("Character", () => {
            const character = encoder.character
            const controlCharacter = Element.dit()

            it("Dit", () => {
              assert.equal(character, controlCharacter)
            })
          })
        })

        describe("Equal To Element Duration", () => {
          const elementDuration = Duration.example()
          const encoder = new Encoder(elementDuration)

          encoder.startSignalTime = Time.example()
          encoder.stopSignalTime = Time.example({
            offsetMilliseconds: elementDuration
          })

          encoder.readSignalOn()

          describe("Character", () => {
            const character = encoder.character
            const controlCharacter = Element.dit()

            it("Dit", () => {
              assert.equal(character, controlCharacter)
            })
          })
        })

        describe("Greater Than Element Duration", () => {
          const elementDuration = Duration.example()
          const encoder = new Encoder(elementDuration)

          encoder.startSignalTime = Time.example()
          encoder.stopSignalTime = Time.example({
            offsetMilliseconds: elementDuration + 1
          })

          encoder.readSignalOn()

          describe("Character", () => {
            const character = encoder.character
            const controlCharacter = Element.dah()

            it("Dah", () => {
              assert.equal(character, controlCharacter)
            })
          })
        })
      })
    })
  })
})
