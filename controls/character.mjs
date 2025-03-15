import Element from "./element.mjs"

class Character {
  static example() {
    const dit = Element.dit()
    const dah = Element.dah()

    return `${dit}${dah}`
  }
}

export default Character
