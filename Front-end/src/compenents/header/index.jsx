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
      <nav className="nav"> {/**mettre dans class nav */}
        <NavLink to="/">
          <img className="nav__logo" src={logo} alt="SportSee logo" /> {/**lien du logo  vers home */}
        </NavLink>

        <NavLink className="nav__menu__link" to='/'> {/**lien de l'accueil vers home  */}
          Accueil
        </NavLink>
        <NavLink className="nav__menu__link"  to='/'> {/**lien du rpfil vers home  */}
          Profil
        </NavLink>
        <NavLink className="nav__menu__link"  to='/'> {/**lien de réglage vers home  */}
          Réglage
        </NavLink>
        <NavLink className="nav__menu__link" to='/'> {/**lien de communauté vers home  */}
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
