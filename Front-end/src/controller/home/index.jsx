import { NavLink } from 'react-router-dom'
import karl from '../../assets/avatarHomme.png'
import cecilia from '../../assets/avatarFemme.png'
import john from '../../assets/avatarHomme.png'
import './_home.scss'
/**
 *
 * @returns {ReactElement} login page
 */
const UserSelect = () => {
  return (
    <div className="userSelect">
     
      <div className="userContainer">
        <ul>
          <NavLink className="navlink" to="/12">
            <div className="userCard">
              <div className="imgContainer">
                <img src={karl} alt="karl " />
              </div>
              <p>Karl</p>
              <p>Dovineau</p>
            </div>
          </NavLink>

          <NavLink className="navlink" to="/18">
            <div className="userCard">
              <div className="imgContainer">
                <img src={cecilia} alt="cécilia " />
              </div>
              <p>Cecilia</p>
              <p>Ratorez</p>
            </div>
          </NavLink>
          <NavLink className="navlink" to="/errorPage">
            <div className="userCard">
              <div className="imgContainer">
                <img src={john} alt="john " />
              </div>
              <p>John</p>
              <p>Doe</p>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default UserSelect
