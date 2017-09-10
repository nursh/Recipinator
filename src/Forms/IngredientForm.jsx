import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Header, Divider, List } from 'semantic-ui-react';


import Field from './Field.jsx';
import { store } from './formState';


class IngredientForm extends React.Component {
  state = {
    ingredient: '',
  };

  handleChange = ({ value }) => {
    let { ingredient } = this.state;
    ingredient = value;
    this.setState({ ingredient });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'INGREDIENTS', ingredient: this.state.ingredient });
    this.setState({ ingredient: '' });
  }

  render() {
    const ingredients = this.props.ingredients
      .map((item, index) => <List.Item key={index}>{item}</List.Item>);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field
          placeholder="Ingredient"
          name="ingredient"
          value={this.state.ingredient}
          handleChange={this.handleChange}
        />

        <Form.Field>
          <Button fluid color="orange" type="submit">Add Ingredient</Button>
        </Form.Field>

        <Form.Field>
          <Header as="h3">
            <Divider horizontal>View Directions</Divider>
          </Header>
          <List bulleted>{ingredients}</List>
        </Form.Field>

        <Form.Field>
          <Button
            color="teal"
            floated="left"
            labelPosition="left"
            icon="arrow left"
            onClick={this.props.onPrevPage}
            content="Previous"
            type="button"
          />
          <Button
            color="teal"
            floated="right"
            labelPosition="right"
            icon="arrow right"
            onClick={this.props.onNextPage}
            content="Next"
            type="button"
          />
        </Form.Field>

        <Form.Field />
      </Form>
    );
  }
}

IngredientForm.propTypes = {
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default IngredientForm;
