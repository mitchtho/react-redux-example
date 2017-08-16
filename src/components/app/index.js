import React from 'react'
import { Route } from 'react-router'
import Home from '../home'
import Nav from '../nav'
import Login from '../login'
import Join from '../join'
import './index.css'
export default () => {
  return <div id="app">
    <Nav></Nav>
    <div id="app-content">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
    </div>
  </div>
}
