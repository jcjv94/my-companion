import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
	
const Nav = (props) => {
  let nav = props.user ?
  <div>
    <Link to='/dogs' className='Nav-link'>Dogs</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='' className='NavBar-link'>LOG OUT</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  </div>
  :
  <div>
   <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>;

return (
  <div className='Nav'>
    {nav}
  </div>
);
};

//   return (
//     <div className="Nav">
//       <nav>
//       <Link to='/login' className='NavBar-link'>LOG IN</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
//       </nav>
//     </div>
//   );
// };

export default Nav;