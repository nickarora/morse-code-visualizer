import { assert } from "#test/automated/test-init"

import { Duration, Element } from "#controls"

import SignalReader from "#src/morse/encoder/signal-reader"

describe("Morse", () => {
  describe("Encoder", () => {
    describe("Signal Reader", () => {
      describe("Signal Duration", () => {
        describe("Less Than Element Duration", () => {
          const elementDuration = Duration.example()

          const signalReader = new SignalReader(elementDuration)

          const element = signalReader.read(elementDuration - 1)

          it("Dit", () => {
            assert.equal(element, Element.dit())
          })
        })

        describe("Equal To Element Duration", () => {
          const elementDuration = Duration.example()

          const signalReader = new SignalReader(elementDuration)

          const element = signalReader.read(elementDuration)

          it("Dit", () => {
            assert.equal(element, Element.dit())
          })
        })

        describe("Greater Than Element Duration", () => {
          const elementDuration = Duration.example()

          const signalReader = new SignalReader(elementDuration)

          const element = signalReader.read(elementDuration + 1)

          it("Dah", () => {
            assert.equal(element, Element.dah())
          })
        })

        describe("Less Than Zero", () => {
          const elementDuration = Duration.example()

          const signalReader = new SignalReader(elementDuration)

          const element = signalReader.read(-1)

          it("Empty string", () => {
            assert.equal(element, '')
          })
        })
      })
    })
  })
})
