/**
 * Validate from middlewares
 *
 * @param {Array} middlewares
 * @param {Object} from
 * @param {Object} to
 * @param {*} response
 */
export default (middlewares, from, to, response = null) => {
  if (middlewares.length > 0) {
    for (let i = 0; i < middlewares.length; i++) {
      response = middlewares[i].run(from, to, response)
      if (!response) return false
    }
    return response
  }
  return true
}
