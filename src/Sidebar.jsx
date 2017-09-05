import React from 'react';


function Sidebar() {
  return (
    <div className="ui sidebar left vertical menu">
      <div className="ui input focus item">
        <input type="text" placeholder="Search for recipe..." />
      </div>
      <a className="item">
        View recipes
      </a>
      <a className="item">
        Add a recipe
      </a>
    </div>
  );
}

export default Sidebar;
