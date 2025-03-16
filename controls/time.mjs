class Time {
  static example({ offsetMilliseconds } = { offsetMilliseconds: 0 }) {
    return new Date(2000, 0, 1, 0, 0, 0, offsetMilliseconds).getTime()
  }

  static other() {
    return this.example({ offsetMilliseconds: 1})
  }
}

export default Time
