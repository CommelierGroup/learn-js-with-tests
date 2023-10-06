import { it } from 'node:test'
import { hello } from './hello-world.js'
import assert from 'node:assert'

it("should return 'Hello, You!' when hello('You') is called", () => {
  const got = hello('Je-Hwan')
  const want = 'Hello, Je-Hwan!'

  assert.equal(got, want)
})

it("should return 'Hello, World!' when an empty string is supplied", () => {
  const got = hello('')
  const want = 'Hello, World!'

  assert.equal(got, want)
})
