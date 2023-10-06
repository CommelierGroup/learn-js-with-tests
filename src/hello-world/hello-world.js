/**
 *
 * @param {string} name
 * @returns {string}
 */
export function hello(name) {
  if (name === '') name = 'World'

  return `Hello, ${name}!`
}
