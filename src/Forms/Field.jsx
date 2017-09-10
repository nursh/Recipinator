import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';


export default class Field extends Component {
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

    // const inValue = (name === 'title') ?
    //   value.split(' ').join('') :
    //   value;
    // const error = this.props.validate(inValue);

    // const showErrorMessage = document.querySelector(`.message.${name}`);
    // if (error) {
    //   showErrorMessage.classList.remove('hidden');
    // } else {
    //   showErrorMessage.classList.add('hidden');
    // }


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
      <Form.Field required>
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
          type="text"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Form.Field>

      //   <div className={`ui negative hidden message ${this.props.name}`}>
      //     <p>{this.state.error}</p>
      //   </div>
      // </div>
    );
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validate: PropTypes.func,
  handleChange: PropTypes.func,
};
