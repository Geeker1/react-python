import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import logos from '../logo.svg'


const Nav = props => {


	const {isAuthenticated,token,searchme,search,logout,toastManager} = props


	const logout_handler=()=>{
    props.logout(()=>{
      props.toastManager.add("You've been logged out.", { appearance: 'error' })
    })

  }

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className='hello nav-link' to=''>
                Codex Camp
              </NavLink>
              <img className='App-logo' src={logos} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <a className="nav-link hello" href="#">IDE section <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        { (!isAuthenticated & !token) || (!isAuthenticated || !token) ? <NavLink className='hello nav-link' to='/login'>Login</NavLink>
                : <a className='hello nav-link' onClick={()=>logout_handler()}>
                  Log Out</a>
              }
      </li>
      <li className="nav-item">
        <NavLink className='hello nav-link' to='/about/'>
                About Me
              </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className='hello nav-link' to='/posts/'>
                Posts
              </NavLink>
      </li>
      <li className="nav-item dropdown">
      { (!isAuthenticated & !token) || (!isAuthenticated || !token) ? ''
                : <div className='d-inline'><a className="nav-link hello dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notifications
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div></div>
              }
        
      </li>
    </ul>
    { (!isAuthenticated & !token) || (!isAuthenticated || !token) ? ''
              : <Search fetch={searchme} search={search} />
            }
  </div>
</nav>
	)
}

export default Nav
