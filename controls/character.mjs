import CharacterClass from "#src/morse/character"

import Element from "./element.mjs"

class Character {
  static example() {
    const elements = [this.elements()]

    const character = new CharacterClass(elements)

    return character
  }

  static elements() {
    return [Element.example()]
  }
}

export default Character
