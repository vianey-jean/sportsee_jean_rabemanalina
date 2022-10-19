//import react-router-dom, react, svg, scss

import { NavLink} from 'react-router-dom'
import React from 'react'
import yoga from '../../assets/yoga.svg'
import natation from '../../assets/natation.svg'
import cycle from '../../assets/cycle.svg'
import force from '../../assets/force.svg'
import './_sideBar.scss'

/**
 * Component - SideBar
 * * Logos
   * @param {yoga} yoga // yogaLogo
   * @param {natation} natation // natationaLogo
   * @param {cycle} cycle // cycleLogo
   * @param {force} force  // forceLogo
 * @returns {React.ReactElement} JSX.Element - SideBar component
 */

function SideBar() {
 
  return (
    <nav className="sideNav"> {/**class sidenav */}
      <NavLink className="sideNav__link" to="/"> {/**lien vers home */}
        <img className="nav__logo" src={yoga} alt="yoga" />
      </NavLink>
      <NavLink className="sideNav__link" to="/">{/**lien vers home */}
        <img className="nav__logo" src={natation} alt="natation" />
      </NavLink>
      <NavLink className="sideNav__link" to="/">{/**lien vers home */}
        <img className="nav__logo" src={cycle} alt="cycle" />
      </NavLink>
      <NavLink className="sideNav__link" to="/">{/**lien vers home */}
        <img className="nav__logo" src={force} alt="force" />
      </NavLink>
      <p>Copiryght, SportSee 2022</p> {/**copyright */}
      <h6>RJMV</h6>
    </nav>
  )
}

export default SideBar
