import { assert } from "#test/automated/test-init"

import { Duration, Time, Element } from "#controls"

import Encoder from "#src/morse/encoder"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Read Signal", () => {
      describe("Signal Duration", () => {
        describe("Less Than Element Duration", () => {
          const elementDuration = Duration.example()
          const encoder = new Encoder(elementDuration)

          encoder.startSignalTime = Time.example()

          encoder.stopSignalTime = Time.example({
            offsetMilliseconds: elementDuration - 1
          })

          encoder.readSignal()

          describe("Current Character", () => {
            const currentCharacter = encoder.currentCharacter
            const controlCharacter = Element.dit()

            it("Dit", () => {
              assert.equal(currentCharacter, controlCharacter)
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

          encoder.readSignal()

          describe("Current Character", () => {
            const currentCharacter = encoder.currentCharacter
            const controlCharacter = Element.dit()

            it("Dit", () => {
              assert.equal(currentCharacter, controlCharacter)
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

          encoder.readSignal()

          describe("Current Character", () => {
            const currentCharacter = encoder.currentCharacter
            const controlCharacter = Element.dah()

            it("Dah", () => {
              assert.equal(currentCharacter, controlCharacter)
            })
          })
        })
      })
    })
  })
})
