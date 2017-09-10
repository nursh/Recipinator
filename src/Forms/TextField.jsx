import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  handleChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;


    this.setState({
      value,
    });
    this.props.handleChange({
      name,
      value,
    });
  }


  render() {
    return (
      <div className="required field">
        <label
          htmlFor={this.props.name}
        >
          {this.props.placeholder}
        </label>

        <textarea
          type="text"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          rows="3"
        />

        <div className={`ui negative hidden message ${this.props.name}`}>
          <p>{this.state.error}</p>
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validate: PropTypes.func,
  handleChange: PropTypes.func,
};
