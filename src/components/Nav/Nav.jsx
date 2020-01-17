import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
	
const Nav = (props) => {

  return (
    <div className="Nav">
      <nav>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </nav>
    </div>
  );
};

export default Nav;