import url from 'url-composer'

class Route {
  /**
   * Create Route Instance
   *
   * @param {String} path
   * @param {Function} cb
   * @param {Array} middlewares
   */
  constructor (path, cb, middlewares) {
    /**
     * @property {String}
     */
    this.path = path

    /**
     * @property {Function}
     */
    this.cb = cb

    /**
     * @property {Array}
     */
    this.middlewares = middlewares
  }

  /**
   * Run route
   *
   * @param {Object} from
   * @param {Object} to
   * @param {Object} params
   * @param {*} response
   */
  run (from, to, params, response) {
    this.cb({ from, to, params, response })
  }

  /**
   * Validate url path
   *
   * @param {String} path
   * @param {String} hash
   *
   * @return {Boolean}
   */
  validate (path, hash) {
    return url.test(hash
      ? { path: `/#/${this.path}`, url: `/#/${path}` }
      : { path: this.path, url: path }
    )
  }
}

export default Route
