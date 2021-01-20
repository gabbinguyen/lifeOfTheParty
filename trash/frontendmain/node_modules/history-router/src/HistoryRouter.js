import { createHashHistory, createBrowserHistory } from 'history'

import validate from './validate'

import Route from './Route'
import Middleware from './Middleware'

class HistoryRouter {
  /**
   * Create HistoryRouter Instance
   *
   * @param {Boolean} hash
   */
  constructor (hash = true) {
    /**
     * @property {Object} history
     */
    this.history = hash ? createHashHistory() : createBrowserHistory()

    /**
     * @property {Array}
     */
    this.routes = []

    /**
     * @property {Array}
     */
    this.middlewares = []

    /**
     * history.js Blocking
     * https://github.com/ReactTraining/history/blob/master/docs/Blocking.md
     */
    this.history.block(location => validate(this.history, this.routes, this.middlewares, location, hash))
  }

  /**
   * Register Route
   *
   * @param {String} path
   * @param {Function} cb
   * @param {Array} middlewares
   */
  when (path, cb, middlewares = []) {
    for (let i = 0; i < middlewares.length; i++) {
      middlewares[i] = new Middleware(middlewares[i])
    }
    this.routes.push(new Route(path, cb, middlewares))
  }

  /**
   * Register global middleware
   *
   * @param {Function} cb
   */
  middleware (cb) {
    this.middlewares.push(new Middleware(cb))
  }
}

/** Only for CDN, or Bower */
window.HistoryRouter = HistoryRouter

export default HistoryRouter
