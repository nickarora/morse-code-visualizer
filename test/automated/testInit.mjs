import 'mocha'
import assert from 'node:assert'

function refute(value, message) {
  !assert(value, message)
}

refute.equal = assert.notEqual.bind(assert);
refute.strictEqual = assert.notStrictEqual.bind(assert);
refute.deepEqual = assert.notDeepEqual.bind(assert);
refute.throws = assert.doesNotThrow.bind(assert);

export {
  assert,
  refute
}
