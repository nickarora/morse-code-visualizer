class Word {
  _characters = []

  constructor(characters=[]) {
    this._characters = characters
  }

  toString() {
    return this._characters.map((character) => {
      return character.toString()
    }).join('')
  }

  addCharacter(character) {
    this._characters.push(character)
  }

  characters() {
    return this._characters
  }

  forEachCharacter(func) {
    return this._characters.forEach(func)
  }

  isEmpty() {
    return this._characters.length == 0
  }

  clear() {
    this._characters = []
  }

  dup() {
    return new Word(this._characters.map(c => c.dup()))
  }
}

export default Word
