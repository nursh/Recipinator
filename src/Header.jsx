import React from 'react';


function Header() {
  return (
    <div className="ui grid">
      <div className="column">
        <div className="ui huge pointing secondary menu">
          <a className="item open button"> <i className="sidebar icon" /></a>
          <div className="header item">Recipitopia</div>
        </div>
      </div>
    </div>
  );
}

export default Header;

