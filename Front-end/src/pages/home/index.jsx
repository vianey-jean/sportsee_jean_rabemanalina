import './_home.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Homme from '../../assets/avatarHomme.png'
import Femme from '../../assets/avatarFemme.png'

function Home() {
  return (
    <section className="homeSection">
      <Link className="homeSection__userNav__link" to="UserMocked/12">
       <li className = "profil">
        <img src={Homme} alt=""  />
        <p>Karl Mock</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link" to="UserMocked/18">
        <li className = "profil">
          <img src= {Femme} alt ="" />
          <p>Cecilia Mock</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link" to="User/12">
      <li className = "profil">
        <img src={Homme} alt=""  />
        <p>Karl API</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link" to="User/18">
      <li className = "profil">
          <img src= {Femme} alt ="" />
          <p>Cecilia API</p>
        </li>
      </Link>
      <Link className="homeSection__userNav__link__doe" to="-UserMocked/20">
        <li className = "profil">
          <img src= {Homme} alt ="" />
          <p>John Doe</p>
        </li>
      </Link>
    </section>
  )
}

export default Home
