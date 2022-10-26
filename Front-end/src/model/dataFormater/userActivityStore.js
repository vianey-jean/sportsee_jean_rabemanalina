import { fetchUserActivity } from '../service'
import PropTypes from 'prop-types'

/**
 * getUserActivity
 * @param {number} userId
 * @returns {object} user activity datas processing for display in the component
 */
const getUserActivity = async (userId) => {
  try {
    const datas = await fetchUserActivity(userId)

    //api
    //data processing for display in the component
    datas.sessions.forEach(
      (el) => (el.day = parseInt(el.day.split('-').reverse().slice(0, 1))) // day of the month
    )
    return datas.sessions
  } catch {
    return { sessions: [] }
  }
}
getUserActivity.propTypes = {
  userId: PropTypes.number.isRequired,
}
export default getUserActivity
