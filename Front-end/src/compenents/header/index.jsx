import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_sportsee.svg'
import './_header.scss'


function Header() {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/">
          <img className="nav__logo" src={logo} alt="SportSee logo" />
        </NavLink>

        <NavLink className="nav__menu__link" to='/'>
          Accueil
        </NavLink>
        <NavLink className="nav__menu__link"  to='/'>
          Profil
        </NavLink>
        <NavLink className="nav__menu__link"  to='/'>
          Réglage
        </NavLink>
        <NavLink className="nav__menu__link" to='/'>
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header