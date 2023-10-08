/**
 *
 * @param {string} name
 * @param {string?} language
 * @returns {string}
 */
export function hello(name, language) {
  if (name === '') name = 'World'

  return `Hello, ${name}!`
}
