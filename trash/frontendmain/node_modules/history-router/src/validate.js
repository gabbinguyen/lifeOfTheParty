import url from 'url-composer'
import validateFromMiddlewares from './validateFromMiddlewares'

/**
 * Blocking
 *
 * @param {Object} history
 * @param {Array} routes
 * @param {Array} middlewares
 * @param {Location} location
 * @param {Boolean} hash
 *
 * @return {Boolean}
 */
export default (history, routes, middlewares, location, hash) => {
  const path = `${location.pathname}${location.search}${location.hash}`
  const to = location
  const from = history.location

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].validate(path, hash)) {
      let response = validateFromMiddlewares(middlewares, from, to)
      if ((routes[i].middlewares.length > 0) && response) {
        response = validateFromMiddlewares(routes[i].middlewares, from, to, response)
      }
      if (response) {
        const params = url.parse({ path, definition: routes[i].path, object: true })
        return routes[i].run(from, to, params, response)
      }
      return false
    }
  }
  return true
}
