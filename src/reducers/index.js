import {combineReducers as reducers} from 'redux'
import {handleActions as actions} from 'redux-actions'
import { routerReducer } from 'react-router-redux'

export default reducers({
  route: routerReducer,
  message: actions({
    ROUTE () { return false },
    CREATE_MESSAGE (state, {payload}) {
      return payload
    }
  }, false),
  messages: actions({
    ROUTE () { return false },
    FIND_MESSAGES (state, {payload}) {
      return payload
    }
  }, false)
})
