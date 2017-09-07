import React from 'react';
import PropTypes from 'prop-types';


import TextField from './TextField.jsx';

class DirectionForm extends React.Component {
  state = {
    direction: '',
    directions: [],
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.props.onSubmit}>
        <TextField
          placeholder="Direction"
          name="direction"
          value={this.state.direction}
        />

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
          <button type="button" className="ui teal labeled icon button left floated" onClick={this.props.onPreviousPage}>
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
}

DirectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
};

export default DirectionForm;
