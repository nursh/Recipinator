import React from 'react';
import { render } from 'react-dom';


import './js/index';
import MainPage from './MainPage.jsx';
import Sidebar from './Sidebar.jsx';


function App() {
  return (
    <div>
      <Sidebar />
      <MainPage />
    </div>
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
