//import proptypes et scss

import PropTypes from 'prop-types'
import './_userHello.scss'

/**
 * Function that returns the Welcome Title in Profil Page
 * @param {string} userFirstName // Name's user
 * @returns {React.ReactElement} JSX.Element - user's presentation
 */

function UserHello({ userFirstName }) {
  return (
    <article className="userHello"> {/**class userhello */}
      <h1>
        Bonjour <span>{userFirstName}</span> { /**bonjour et le prénom du donné avec id qu'on a selectionné */}
      </h1>
      <p>
        Félicitation ! Vous avez explosé vos objectifs hier
        <span role="img" aria-label="icon">
          👏
        </span>
      </p>
    </article>
  )
}

UserHello.propTypes = {
  userFirstName: PropTypes.string.isRequired,
}

export default UserHello
