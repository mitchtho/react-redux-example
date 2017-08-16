import api from '../api'
import { createActions } from 'redux-actions'
import { bindActionCreators } from 'redux'

const Users = api.service('users')

const actions = createActions({
  ROUTE (path) {
    return path
  },
  JOIN (data) {
    return Users.create(data)
  },
  LOGIN (data) {
    return api.authenticate({
      strategy: 'local',
      ...data
    })
  }
  // async GET_MESSAGE (id) {
  //   return await Messages.get(id)
  // },
  // async FIND_MESSAGES (data) {
  //   return await Messages.find(data)
  // },
  // async CREATE_MESSAGE (data) {
  //   return await Messages.create(data)
  // },
  // async UPDATE_MESSAGE (data) {
  //   return await Messages.update(data)
  // },
  // async REMOVE_MESSAGE (id) {
  //   return await Messages.remove(id)
  // }
})

export default actions

export function mapActionsToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}
