const defaultAttributeName = "scheduler"

class Scheduler {
  _timeoutIDs = []

  static configure(instance, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this
  }

  schedule(func, delay) {
    const timeoutID = setTimeout(() => {
      func()
    }, delay)

    this.recordTimeoutID(timeoutID)
  }

  recordTimeoutID(id) {
    this._timeoutIDs.push(id)
  }

  cancelAll() {
    this._timeoutIDs.forEach((timeoutID) => {
      clearTimeout(timeoutID)
    })

    this._timeoutIDs = []
  }
}

class SubstituteScheduler {
  _invocations = []

  static configure(instance, attributeName) {
    attributeName ||= defaultAttributeName
    instance[attributeName] = new this
  }

  schedule(func, delay) {
    this._invocations.push({
      method: "schedule",
      arguments: {
        func,
        delay
      }
    })
  }

  cancelAll() {
    this._invocations.push({
      method: "cancelAll"
    })
  }

  hasScheduled(func, delay) {
    return this._invocations.some((invocation) => {
      return invocation.method == "schedule" &&
        invocation.arguments.func.toString() === func.toString() &&
        invocation.arguments.delay === delay
    })
  }

  hasCanceledAll() {
    return this._invocations.some((invocation) => {
      return invocation.method == "cancelAll"
    })
  }
}

export {
  SubstituteScheduler
}

export default Scheduler
