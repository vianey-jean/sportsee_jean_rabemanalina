import PropTypes from 'prop-types'
import './_userHello.scss'


function UserHello({ userFirstName }) {
  return (
    <article className="userHello">
      <h1>
        Bonjour <span>{userFirstName}</span>
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
