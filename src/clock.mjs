const defaultAttributeName = "clock"

class Clock {
  static configure(instance, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this
  }

  now() {
    return new Date().getTime()
  }
}

class SubstituteClock {
  _time = null

  static configure(instance, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this
  }

  set(time) {
    this._time = time
  }

  now() {
    return this._time
  }
}

export {
  SubstituteClock
}

export default Clock
