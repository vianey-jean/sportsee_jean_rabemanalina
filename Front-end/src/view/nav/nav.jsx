import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/sportSeeLogo.png';
import './_nav.scss';

/**
 *  Vew - Nav, Display the application's Nav with navigation
 * @component
 * @returns {React.ReactElement} JSX.Element - Nav component
 */

const Navbar = () => {
  return (
    <section className='topNav'>
      <NavLink to='/'>
          <img src={logo} alt='logo SportSee' />
      </NavLink>
      <nav className='navigation'>
        <ul>
          <NavLink to='/' className='accueil'>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='' className='navig'>
            <li>Profil</li>
          </NavLink>
          <NavLink to='' className='navig'>
            <li>Réglage</li>
          </NavLink>
          <NavLink to='' className='navig'>
            <li>Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
