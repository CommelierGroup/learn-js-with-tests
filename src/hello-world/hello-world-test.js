import { it } from 'node:test'
import { hello } from './hello-world.js'
import assert from 'node:assert'

it("should return 'Hello, You!' when hello('You') is called", () => {
  const got = hello('Je-Hwan')
  const want = 'Hello, Je-Hwan!'

  assert.equal(got, want)
})
