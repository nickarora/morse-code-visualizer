class Character {
  _elements = []

  constructor(elements=[]) {
    this._elements = elements
  }

  toString() {
    return this._elements.join('')
  }

  addElement(element) {
    this._elements.push(element)
  }

  elements() {
    return this._elements
  }

  forEachElement(func) {
    return this._elements.forEach(func)
  }

  isEmpty() {
    return this._elements.length == 0
  }

  clear() {
    this._elements = []
  }
}

export default Character
