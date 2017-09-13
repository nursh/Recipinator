import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';


import './app.js';
import MainPage from './MainPage.jsx';

render(
  <MainPage />,
  document.querySelector('#root'),
);
