import React from 'react'
import './_nav.scss'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
/**
 * @returns {ReactElement}
 */
const TopNav = () => {
  return (
    <header className="topNav">
      <NavLink to="/"> 
      <img src={logo} alt="logo" />
      </NavLink>
      <nav className="navigation">
        <ul>
          <NavLink className="accueil" to="/">
            Accueil
          </NavLink>
          <NavLink  className="navig" to="/"> 
          <li>Profil</li>
          </NavLink>
          <NavLink className="navig" to="/">
            <li>Réglage</li>
          </NavLink>
          <NavLink  className="navig" to="/">
            <li>Communauté</li>
          </NavLink>
          
          
        </ul>
      </nav>
    </header>
  )
}

export default TopNav
