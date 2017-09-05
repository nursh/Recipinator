import React from 'react';


function DirectionForm() {
  return (
    <form className="ui form">

      <div className="required field">
        <label htmlFor="direction">Direction</label>
        <input type="text" name="direction" id="direction" placeholder="Direction" />
      </div>

      <div className="field">
        <button type="button" className="ui orange button fluid">
          Add Direction
        </button>
      </div>

      <div className="field">
        <h3 className="ui horizontal divider header">
          View Directions
        </h3>
      </div>

      <div className="field">
        <button type="button" className="ui teal labeled icon button left floated">
          <i className="arrow left icon" />
          Previous
        </button>

        <button type="button" className="ui teal right labeled icon button right floated">
          Next
          <i className="arrow right icon" />
        </button>
      </div>

      <div className="field" />

    </form>
  );
}

export default DirectionForm;
