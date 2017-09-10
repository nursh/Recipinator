import React from 'react';
import { render } from 'react-dom';


import './js/index';
import MainPage from './MainPage.jsx';
import Sidebar from './Sidebar.jsx';


function App() {
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/service-worker.js');
  // }
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
