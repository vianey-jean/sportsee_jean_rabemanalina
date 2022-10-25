//import scss, react, react-router-dom, image

import './_home.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Homme from '../../assets/avatarHomme.png'
import Femme from '../../assets/avatarFemme.png'


/**
 * links to user pages based on data type (mocked or retrieve from API)
 * @returns {React.ReactElement} JSX.Element - Link to user page
 */

function Home() {
  return (
    <section className="homeSection"> 
    
      <Link className="homeSection__userNav__link" to="User/12">{/**lien vers userAPI de id 12 */}
      <li className = "profil">
        <img src={Homme} alt=""  />
        <p>Karl API</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link" to="User/18"> {/**lien vers userAPI de id 18 */}
      <li className = "profil">
          <img src= {Femme} alt ="" />
          <p>Cecilia API</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link__doe" to=".User/20"> {/**lien vers user de id 20 */}
        <li className = "profil">
          <img src= {Homme} alt ="" />
          <p>John Doe</p>
        </li>
      </Link>
    </section>
  )
}

export default Home
