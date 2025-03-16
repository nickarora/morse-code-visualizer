import Element from "../element.mjs"
import ensure from "../../ensure.mjs"

const defaultAttributeName = "signalReader"

class SignalReader {
  static configure(instance, elementDuration, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this(elementDuration)
  }

  constructor(elementDuration) {
    this.elementDuration = ensure(elementDuration)
  }

  read(signalDuration) {
    if (signalDuration <= 0) {
      return ''
    }

    if (signalDuration <= this.elementDuration) {
      return Element.dit
    } else {
      return Element.dah
    }
  }
}

class SubstituteSignalReader {
  _records = []
  _element = null

  static configure(instance, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this
  }

  setElement(element) {
    this._element = element
  }

  read(signalDuration) {
    this._records.push(signalDuration)

    return this._element
  }

  hasRead(signalDuration) {
    if (signalDuration) {
      return this._records.some((_signalDuration) => {
        return _signalDuration == signalDuration
      })
    }

    return this._records.length > 0
  }
}

export {
  SubstituteSignalReader
}

export default SignalReader
