import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';


/**
 * @file root folder of the application
 * @author Jean RABEMANALINA
 * @see <a href="https://vianey-jean.github.io/sportsee_jean_rabemanalina/" target="_blank"> gh-pages </a>
 */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

