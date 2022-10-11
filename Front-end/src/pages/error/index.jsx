import React from 'react';
import { NavLink } from 'react-router-dom';
import './_error.scss'

/**
 * ERROR PAGE
 * @returns {React.ReactElement} JSX.Element error page
 */

function Error() {
  return (
    <section className="error">
      <h1>Erreur 404</h1>
      <h2> Oups! La page que vous demandez n'existe pas</h2>
      <NavLink to={process.env.PUBLIC_URL + '/'}>Retourner sur la page d'accueil</NavLink>
    </section>
  )
}

export default Error
