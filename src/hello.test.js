import { test } from 'node:test'
import assert from 'node:assert'

test('will pass', () => {
  assert.deepStrictEqual({ a: '1' }, { a: '1' })
})
