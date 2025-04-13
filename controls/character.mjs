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

class A {
  static example() {
    return Character.example(this.elements())
  }

  static elements() {
    return [Element.dit(), Element.dah()]
  }
}
Character.A = A

class B {
  static example() {
    return Character.example(this.elements())
  }

  static elements() {
    return [Element.dah(), Element.dit(), Element.dit(), Element.dit()]
  }
}
Character.B = B

export default Character
