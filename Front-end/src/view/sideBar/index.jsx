import React from 'react'
import LeftBtn from '../leftBtn'
import meditation from '../../assets/meditation.svg'
import nageur from '../../assets/nageur.svg'
import cycliste from '../../assets/cycliste.svg'
import haltere from '../../assets/haltere.svg'
import './_sideBar.scss'
import PropTypes from 'prop-types'

/**
 *
 * @returns {ReactElement}
 */
const sideBar = () => {
  return (
    <aside className="leftNavBar">
      <div className="leftBtnContainer">
        <LeftBtn icone={meditation} />
        <LeftBtn icone={nageur} />
        <LeftBtn icone={cycliste} />
        <LeftBtn icone={haltere} />
      </div>
      <div className="copyright">Copiryght, SportSee 2022</div>
      <h6>RJMV</h6>
    </aside>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}
export default sideBar
