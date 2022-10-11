import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';


/**
 * @file root folder of the application
 * @author Christelle Philippe
 * @see <a href="https://christelle74.github.io/PhilippeChristelle_12_SportSee/" target="_blank"> repo Git </a>
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

