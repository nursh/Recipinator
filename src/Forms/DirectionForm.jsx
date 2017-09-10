import React from 'react';
import PropTypes from 'prop-types';


import TextField from './TextField.jsx';
import { store } from './formState';

class DirectionForm extends React.Component {
  state = {
    direction: '',
  };

  handleChange = ({ value }) => {
    let { direction } = this.state;
    direction = value;
    this.setState({ direction });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'DIRECTIONS', direction: this.state.direction });
    this.setState({ direction: '' });
  }

  render() {
    const directions = this.props.directions
      .map((item, index) => <div className="item" key={index}>{item}</div>);
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

        <TextField
          placeholder="Direction"
          name="direction"
          handleChange={this.handleChange}
          value={this.state.direction}
        />

        <div className="field">
          <button type="submit" className="ui orange button fluid">
            Add Direction
          </button>
        </div>

        <div className="field">
          <h3 className="ui horizontal divider header">
            View Directions
          </h3>
          <div className="ui ordered list">{directions}</div>
        </div>

        <div className="field">
          <button
            type="button"
            className="ui teal labeled icon button left floated"
            onClick={this.props.onPrevPage}
          >
            <i className="arrow left icon" />
            Previous
          </button>

          <button
            type="button"
            className="ui teal right labeled icon button right floated"
            onClick={this.props.onNextPage}
          >
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
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  directions: PropTypes.arrayOf(PropTypes.string),
};

export default DirectionForm;

