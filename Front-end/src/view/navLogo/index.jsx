import React from 'react'
import './_navLogo.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

/**
 * Vew - NavLogo, Display the application's NavLogo with navigation
 * @param {string} icone
 * @returns {ReactElement}
 */
const NavLogo = ({ icone }) => {
  return (
    <div className="imgContainer">
      <NavLink to="/">
      <img src={icone} alt="sport" />
      </NavLink>
      
    </div>
  )
}
NavLogo.propTypes = {
  icone: PropTypes.string,
}

export default NavLogo
