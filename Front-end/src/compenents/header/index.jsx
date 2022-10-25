//import react, react-router-dom et scss

import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_sportsee.svg'
import './_header.scss'

/**
 * Component - Header, Display the application's header with navigation
 * @returns {React.ReactElement} JSX.Element - header component
 */

function Header() {
  return (
    <header>
      <nav className="header"> {/**mettre dans class nav */}
        <NavLink to="/">
          <img className="nav__logo" src={logo} alt="SportSee logo" /> {/**lien du logo  vers home */}
        </NavLink>
        <div className="navigation">
          <ul>
            <NavLink className="navLink" to='/'> {/**lien de l'accueil vers home  */}
            <li>Accueil</li>
            </NavLink>
            <NavLink className="navLink"  to='/'> {/**lien du rpfil vers home  */}
            <li>Profil</li>
            </NavLink>
            <NavLink className="navLink"  to='/'> {/**lien de réglage vers home  */}
            <li>Réglage</li>
            </NavLink>
            <NavLink className="navLink" to='/'> {/**lien de communauté vers home  */}
            <li>Communauté</li>
            </NavLink>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
