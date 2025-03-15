class ArgumentError extends Error {
  constructor() {
    super("One or more expected arguments are missing")
    this.name = "ArgumentError"
  }
}

export default ArgumentError
