import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router } from 'react-router-dom';
import getRoutes from './routes';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Router>
    { getRoutes() }
  </Router>, 
  document.getElementById('root')
);
