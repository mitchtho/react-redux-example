import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import promiseMiddleware from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'
import reducers from '../reducers'

const history = createHistory()
const store =
  createStore(
    reducers,
    applyMiddleware(promiseMiddleware),
    applyMiddleware(routerMiddleware(history))
  )

const { dispatch, subscribe, getState } = store

export { history, dispatch, subscribe, getState }
export default store
