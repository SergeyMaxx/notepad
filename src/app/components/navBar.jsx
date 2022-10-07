import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar bg-secondary">
      <div className="container-fluid">
        <ul className="nav">
          <li className="">
            <div className="nav-bar">
              <Link className="nav-link " aria-current="page" to="/">
                Notes
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-bar">
              <Link className="nav-link" aria-current="page" to="/signIn">
                Sign in
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-bar">
              <Link className="nav-link a" aria-current="page" to="/signUp">
                Sign up
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar