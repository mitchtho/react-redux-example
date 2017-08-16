import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default (state) => {
  return <nav id='nav'>
    <Link id='nav-brand' to="/">BRAND</Link>
    <Link id='nav-menu' className='icon' to="/menu">menu</Link>
    <Link id='nav-search' className='icon' to="/search">search</Link>
    <links id='nav-links'>
      <Link to="/">Home</Link>
      <Link to="/marketplace">Marketplace</Link>
      <Link to="/login">Login</Link>
      <Link to="/join">Join</Link>
    </links>
  </nav>
}
