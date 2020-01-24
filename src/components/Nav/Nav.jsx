import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = (props) => {
  let nav = props.user ?
      <nav class="black">
      <a href="/dashboard" class="brand-logo">&nbsp;&nbsp;My Compawdre</a>
      <div class="right-align">
      <span className='Nav-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='Nav-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </nav>
    :
    <nav class="black">
      {/* <a href="/" class="brand-logo">&nbsp;&nbsp;My Compawdre</a> */}
      <div class="right-align">
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </nav>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default Nav;