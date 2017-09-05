import React from 'react';


import MainForm from './MainForm.jsx';

function RecipeForm() {
  return (
    <div className="ui container">
      <div className="ui grid centered">

        <div className="row">
          <div className="sixteen wide mobile eight wide computer column">
            <div className="ui very raised teal segment">

              <h2 className="ui teal horizontal divider header">
                Recipinator
              </h2>
              <MainForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RecipeForm;
