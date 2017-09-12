import React from 'react';
import { render } from 'react-dom';


// import './app.js';
import MainPage from './MainPage.jsx';

function App() {
  return (
    <MainPage />
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
