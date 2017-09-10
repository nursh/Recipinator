import React from 'react';
import PropTypes from 'prop-types';


import Field from './Field.jsx';
import TextField from './TextField.jsx';
import { store } from './formState';

class MainForm extends React.Component {
  state = {
    fields: {
      title: this.props.main.title,
      description: this.props.main.description,
      imageUrl: this.props.main.imageUrl,
      prepTime: this.props.main.prepTime,
      cookingTime: this.props.main.cookingTime,
    },
    fieldErrors: {},
  };

  handleChange = ({ name, value }) => {
    const { fields, fieldErrors } = this.state;

    fields[name] = value;

    this.setState({
      fields,
      fieldErrors,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'MAIN', fields: this.state.fields });
    this.props.onNextPage();
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

        <Field
          placeholder="Recipe Title"
          name="title"
          value={this.state.fields.title}
          handleChange={this.handleChange}
        />

        <TextField
          placeholder="Enter Recipe Description"
          name="description"
          value={this.state.fields.description}
          handleChange={this.handleChange}
        />


        <Field
          placeholder="Image Url"
          name="imageUrl"
          value={this.state.fields.imageUrl}
          handleChange={this.handleChange}
        />

        <div className="two fields">
          <Field
            placeholder="Prep Time in mins"
            name="prepTime"
            value={this.state.fields.prepTime}
            handleChange={this.handleChange}
          />

          <Field
            placeholder="Cooking Time in mins"
            name="cookingTime"
            value={this.state.fields.cookingTime}
            handleChange={this.handleChange}
          />
        </div>

        <div className="field">
          <button
            type="submit"
            className="ui teal right labeled icon button right floated"
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

MainForm.propTypes = {
  nextPage: PropTypes.func,
};

export default MainForm;

