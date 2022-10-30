import { NavLink } from 'react-router-dom'
import avatarHomme from '../../assets/avatarHomme.png'
import cecilia from '../../assets/avatarFemme.png'
//import john from '../../assets/avatarHomme.png'
import './_home.scss'

/**
 * home - links to user pages based on data type (mocked or retrieve from API)
 * @returns {React.ReactElement} JSX.Element - Link to user page
 */

const Home = () => {
  return (
    <div className="userSelect">
      <div className="userContainer">
        <ul>
          <NavLink className="navlink" to="/12">
            <div className="userCard">
              <div className="imgContainer">
                <img src={avatarHomme} alt="karl " />
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
          <NavLink className="navlink" to="/20">
            <div className="userCard">
              <div className="imgContainer">
                <img src={avatarHomme} alt="john " />
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

export default Home
