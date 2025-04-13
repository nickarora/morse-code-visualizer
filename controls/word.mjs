import WordClass from "#src/morse/word"

import { Character } from "#controls"

class Word {
  static example(characters) {
    characters ||= this.characters()

    const word = new WordClass(characters)

    return word
  }

  static characters() {
    const character = Character.example()

    return [character]
  }
}

class New {
  static example() {
    return Word.example([])
  }
}
Word.New = New

export default Word
