import React from 'react'
import './_header.scss'
import clap from '../../assets/clap.png'
import PropTypes from 'prop-types'

/**
 * View - Header, Display the application's header with navigation
 * @param {string} userName user name
 * @returns {React.ReactElement} JSX.Element - header component
 */

const Header = ({ userName }) => {
  return (
    <div className="title">
      <div className="hello">
        <h1>Bonjour</h1>
        <h1 className="userName">{userName}</h1>
      </div>
      <p className="congrats">
        Félicitation ! Vous avez explosé vos objectifs hier
        <img src={clap} alt="clap" />
      </p>
    </div>
  )
}
Header.propTypes = {
  userName: PropTypes.string,
}

export default Header
