import React from 'react';
import PropTypes from 'prop-types';


function DirectionForm(props) {
  return (
    <form className="ui form" onSubmit={props.onSubmit}>

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
        <button type="button" className="ui teal labeled icon button left floated" onClick={props.onPreviousPage}>
          <i className="arrow left icon" />
          Previous
        </button>

        <button type="submit" className="ui teal right labeled icon button right floated">
          Next
          <i className="arrow right icon" />
        </button>
      </div>

      <div className="field" />

    </form>
  );
}

DirectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
};

export default DirectionForm;
