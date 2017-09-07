import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  handleChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;

    const inValue = (name === 'activity' || name === 'target') ?
      value.split(' ').join('') :
      value;
    const error = this.props.validate(inValue);

    const showErrorMessage = document.querySelector(`.message.${name}`);
    if (error) {
      showErrorMessage.classList.remove('hidden');
    } else {
      showErrorMessage.classList.add('hidden');
    }


    this.setState({
      value,
      error,
    });
    this.context.handleChange({
      name,
      value,
      error,
    });
  }


  render() {
    return (
      <div className="field">
        <label
          htmlFor={this.props.name}
        >
          {this.props.placeholder}
        </label>

        <textarea
          rows="3"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
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
};
