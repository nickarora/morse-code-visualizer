class ArgumentError extends Error {
  constructor() {
    super("Missing required argument")
    this.name = "ArgumentError"
  }
}

function ensure(value) {
  if (value === null || value === undefined) {
    throw new ArgumentError()
  }

  return value
}

export {
  ArgumentError
}

export default ensure
