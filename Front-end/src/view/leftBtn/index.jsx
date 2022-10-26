import React from 'react'
import './_leftBtn.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

/**
 *
 * @param {string} icone
 * @returns {ReactElement}
 */
const LeftBtn = ({ icone }) => {
  return (
    <div className="imgContainer">
      <NavLink to="/">
      <img src={icone} alt="sport" />
      </NavLink>
      
    </div>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}

export default LeftBtn
