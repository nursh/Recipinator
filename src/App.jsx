import React from 'react';
import { render } from 'react-dom';


import MainPage from './MainPage.jsx';
import SideNav from './SideNav.jsx';


function App() {
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/service-worker.js');
  // }
  return (
    <div>
      <SideNav />
      <MainPage />
    </div>
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
