import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = ({ hello }) => {
  const { auth: { isAuthenticated, token } } = hello

  console.log(hello)
  let { PrivateRoute, logout } = hello

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <a className='navbar-brand' href='#'>Djang-React Demo</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink className='btn btn-success' to='/'> Home Page </NavLink>
          <NavLink className='btn btn-primary' to='/posts/'> posts </NavLink>
          <NavLink className='btn btn-info' to='/customer'>CREATE CUSTOMER</NavLink>
          { (!isAuthenticated & !token) || (!isAuthenticated || !token) ? ''
            : <button onClick={logout} className='btn btn-danger rounded-0'>
	Log Out</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default MainMenu
