import React from 'react';
import { NavLink } from 'react-router-dom';
import './_errorPage.scss';

/** Creation of 404 error page with link to homepage
 *  *
  @returns {React.ReactElement} JSX.Element error page
 */

const Error404 = () => {
  return (
    <div className="errorPageContainer">
      <h1>Erreur 404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <NavLink className="navlink" to="/">
        retour à l'accueil
      </NavLink>
    </div>
  );
};

export default Error404;
