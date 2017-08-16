import hooks from 'feathers-hooks'
import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import axios from 'axios'
import authentication from 'feathers-authentication-client'

const api = window.api = feathers()

api
  .configure(rest().axios(axios))
  .configure(hooks())
  .configure(authentication())

api
  .service('users')
  .create({
    email: 'user@email.com',
    password: 'password'
  })
  .then(data => {
    console.log({data});
    return api
      .authenticate({
        strategy: 'local',
        email: 'user@email.com',
        password: 'password'
      })
  })
  .then(({accessToken}) => {
    return api
      .authenticate({
        strategy: 'jwt',
        accessToken
      })
  })
  .then(auth => {
    console.log({auth});
    // api.set('accessToken', 'HEYHEY')
    return api.service('users').find()
  })
  .then(users => {
    console.log({users});
  })
  .catch(error => {
    console.log({error});
  })

export default api
