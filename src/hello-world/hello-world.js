/**
 *
 * @param {string} name
 * @param {string?} language
 * @returns {string}
 */
export function hello(name, language) {
  if (name === '') name = 'World'

  if (language === 'Spanish') {
    return `Hola, ${name}!`
  }

  return `Hello, ${name}!`
}
