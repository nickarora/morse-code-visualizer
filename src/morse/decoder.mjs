const letterToElements = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z"
}

class Decoder {
  static decodeWord(word) {
    return word.
      characters().
      map(this.decodeCharacter).
      join('')
  }

  static decodeCharacter(character) {
    const decodedCharacter = letterToElements[character.toString()]

    if (!decodedCharacter) {
      return ""
    }

    return decodedCharacter
  }
}

export default Decoder
