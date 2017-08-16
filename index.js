import io from 'socket.io-client'
import hooks from 'feathers-hooks'
import feathers from 'feathers'
import rest from 'feathers-rest'
import memory from 'feathers-memory'
import local from 'feathers-authentication-local'
import authentication from 'feathers-authentication'

const {PORT} = process.env

const app = feathers()

app
  .configure(rest())
  .configure(hooks())
  .configure(authentication({secret: 'secret'}))
  .use('/users', memory())
  .use(feathers.static('public'))

app.service('authentication').hooks({
  before: {
    create: [
      // You can chain multiple strategies
      authentication.hooks.authenticate(['jwt','local'])
    ],
    remove: [
      authentication.hooks.authenticate('jwt')
    ]
  }
})

app.service('users').hooks({
  before: {
    find: [
      authentication.hooks.authenticate('jwt')
    ],
    create: [
      local.hooks.hashPassword({ passwordField: 'password' })
    ]
  }
})

app.listen(PORT || 3001)
