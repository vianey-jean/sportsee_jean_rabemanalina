import React from 'react';
import { NavLink } from 'react-router-dom'

import avatartHomme from '../../assets/avatarHomme.png'
import avatartFemme from '../../assets/avatarFemme.png';

import './_home.scss';

/**
 * home - links to user pages based on data type (mocked or retrieve from API)
 * @returns {React.ReactElement} JSX.Element - Link to user page
 */
const Home = () => {
  return (
    <div className="userSelect">
    <div className="userContainer">
      <ul>
        <NavLink className="navlink" to="user/12">
          <div className="userCard">
            <div className="imgContainer">
              <img src={avatartHomme} alt="karl " />
            </div>
            <p>Karl</p>
            <p>Dovineau</p>
          </div>
        </NavLink>

        <NavLink className="navlink" to="/user/18">
          <div className="userCard">
            <div className="imgContainer">
              <img src={avatartFemme} alt="cécilia " />
            </div>
            <p>Cecilia</p>
            <p>Ratorez</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="user/20">
          <div className="userCard">
            <div className="imgContainer">
              <img src={avatartHomme} alt="john " />
            </div>
            <p>John</p>
            <p>Doe</p>
          </div>
        </NavLink>
      </ul>
    </div>
  </div>
  );
};

export default Home;
