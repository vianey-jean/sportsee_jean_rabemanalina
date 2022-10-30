import React from 'react'
import NavLogo from '../navLogo/navLogo'
import meditation from '../../assets/meditation.svg'
import nageur from '../../assets/nageur.svg'
import cycliste from '../../assets/cycliste.svg'
import haltere from '../../assets/haltere.svg'
import './_sideBar.scss'
import PropTypes from 'prop-types'

/**
 * View - SideBar
 * * Logos
 * @param {yoga} yoga // yogaLogo
 * @param {natation} natation // natationaLogo
 * @param {cycle} cycle // cycleLogo
 * @param {force} force  // forceLogo
 * @returns {React.ReactElement} JSX.Element - SideBar component
 */

const SideBar = () => {
  return (
    <aside className="leftNavBar">
      <div className="leftBtnContainer">
        <NavLogo icone={meditation} />
        <NavLogo icone={nageur} />
        <NavLogo icone={cycliste} />
        <NavLogo icone={haltere} />
      </div>
      <div className="copyright">Copiryght, SportSee 2022</div>
      <h6>RJMV</h6>
    </aside>
  )
}
NavLogo.propTypes = {
  icone: PropTypes.string,
}
export default SideBar
