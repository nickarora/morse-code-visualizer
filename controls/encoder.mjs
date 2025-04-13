import EncoderClass from "#src/morse/encoder"

import { Duration } from "#controls"

class Encoder {
  static example() {
    const duration = this.duration()
    const encoder = new EncoderClass(duration)

    return encoder
  }

  static duration() {
    return Duration.example()
  }
}

export default Encoder
