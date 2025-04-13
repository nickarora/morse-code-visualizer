import CharacterClass from "#src/morse/character"

import Element from "./element.mjs"

class Character {
  static example(elements) {
    elements ||= this.elements()

    const character = new CharacterClass(elements)

    return character
  }

  static other() {
    const elements = [Element.other()]
    const character = this.example(elements)

    return character
  }

  static elements() {
    return [Element.example()]
  }
}

export default Character
