import React from 'react'
import { connect } from 'react-redux'
import { mapActionsToProps } from '../../actions'

class Join extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.next = this.next.bind(this)
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }
  submit (event) {
    event.preventDefault()
    this.props.actions.join(this.state)
    .then(this.next)
  }
  next (data) {
    console.log('next:', {data});
  }
  change ({target}) {
    const opts = {}
    opts[target.name] = target.value
    this.setState(opts)
  }
  render () {
    return <form className="max" onSubmit={this.submit}>
      <h2>Join</h2>
      <h4>Get paid today.</h4>
      <input name="email" type="text" placeholder="Email Address" autoFocus onChange={this.change} />
      <input name="password" type="password" placeholder="Password" onChange={this.change} />
      <input name="password_confirmation" type="password" placeholder="Confirm Password" onChange={this.change} />
      <input name="first_name" type="text" placeholder="First Name" onChange={this.change} />
      <input name="last_name" type="text" placeholder="Last Name" onChange={this.change} />
      <button>Join Now</button>
    </form>
  }
}

export default connect(
  undefined,
  mapActionsToProps
)(Join)
