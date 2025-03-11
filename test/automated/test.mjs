import { assert, refute } from './testInit.mjs'

const add = (a, b) => a + b

describe('Add', () => {
  const a = 1
  const b = 2
  const sum = add(a, b)

  it('Sums', () => {
    assert(sum, 3)
  })

  it('Does not subtract', () => {
    refute(sum, -1)
  })
})
