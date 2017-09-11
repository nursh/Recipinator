import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Header, Divider, List, Input } from 'semantic-ui-react';

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
    const { fields } = this.state;
    fields[name] = value;
    this.setState({
      fields,
    });
  }

  handleImage = (evt) => {
    const { name, value } = evt.target;
    this.handleChange({ name, value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'MAIN', fields: this.state.fields });
    this.props.onNextPage();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field
          placeholder="Recipe Title"
          name="title"
          value={this.state.fields.title}
          handleChange={this.handleChange}
        />

        <TextField
          placeholder="Recipe Description"
          name="description"
          value={this.state.fields.description}
          handleChange={this.handleChange}
        />
        
        <Form.Field required>
          <label htmlFor="imageUrl">ImageUrl</label>
          <Input
            name="imageUrl"
            type="file"
            id="imageUrl"
            accept="image/*"
            onChange={this.handleImage}
          />
        </Form.Field>


        <Form.Group widths="equal">
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
        </Form.Group>

        <Form.Field>
          <Button
            color="teal"
            floated="right"
            labelPosition="right"
            icon="arrow right"
            content="Next"
            type="submit"
          />
        </Form.Field>

        <Form.Field />
      </Form>
    );
  }
}

MainForm.propTypes = {
  nextPage: PropTypes.func,
};

export default MainForm;

