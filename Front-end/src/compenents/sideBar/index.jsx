import { NavLink} from 'react-router-dom'
import React from 'react'
import yoga from '../../assets/yoga.svg'
import natation from '../../assets/natation.svg'
import cycle from '../../assets/cycle.svg'
import force from '../../assets/force.svg'

import './_sideBar.scss'

function SideBar() {
 
  return (
    <nav className="sideNav">
      <NavLink className="sideNav__link" >
        <img className="nav__logo" src={yoga} alt="yoga" />
      </NavLink>
      <NavLink className="sideNav__link" >
        <img className="nav__logo" src={natation} alt="natation" />
      </NavLink>
      <NavLink className="sideNav__link" >
        <img className="nav__logo" src={cycle} alt="cycle" />
      </NavLink>
      <NavLink className="sideNav__link" >
        <img className="nav__logo" src={force} alt="force" />
      </NavLink>
      <p>Copiryght, SportSee 2022</p>
      <h6>RJMV</h6>
    </nav>
  )
}

export default SideBar
