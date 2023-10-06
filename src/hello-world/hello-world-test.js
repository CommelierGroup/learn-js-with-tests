import { it } from 'node:test'
import { hello } from './hello-world.js'
import assert from 'node:assert'

it("should return 'Hello, World!' when hello() is called", () => {
  const got = hello()
  const want = 'Hello, World!'

  assert.equal(got, want)
})
