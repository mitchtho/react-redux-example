import React from 'react'
import { connect } from 'react-redux'
import { mapActionsToProps } from '../../actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
  }
  submit (event) {
    event.preventDefault()
    this.props.actions.login(this.state)
    .then(data => {
      console.log({data});
    })
    .catch(error => {
      console.log({error});
    })
  }
  change ({target}) {
    const opts = {}
    opts[target.name] = target.value
    this.setState(opts)
  }
  render () {
    return <form className="max" onSubmit={this.submit}>
      <h2>Login</h2>
      <h4>You're moments away.</h4>
      <input name="email" type="email" placeholder="Email" onChange={this.change} />
      <input name="password" type="password" placeholder="Password" onChange={this.change} />
      <button>Login</button>
    </form>
  }
}

export default connect(
  undefined,
  mapActionsToProps
)(Login)
