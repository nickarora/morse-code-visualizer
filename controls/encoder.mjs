import EncoderClass from "#src/morse/encoder"

import { Duration } from "#controls"

class Encoder {
  static example() {
    const duration = Duration.example()
    const encoder = new EncoderClass(duration)

    return encoder
  }
}

export default Encoder
