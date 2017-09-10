import React from 'react';
import PropTypes from 'prop-types';


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
      .map((item, index) => <div className="item" key={index}>{item}</div>);
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

        <div className="required field">
          <Field
            placeholder="Ingredient"
            name="ingredient"
            value={this.state.ingredient}
            handleChange={this.handleChange}
          />
        </div>

        <div className="field">
          <button type="submit" className="ui orange button fluid">
            Add Ingredient
          </button>
        </div>

        <div className="field">
          <h3 className="ui horizontal divider header">
            View Ingredients
          </h3>
          <div className="ui bulleted list">{ingredients}</div>
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

IngredientForm.propTypes = {
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default IngredientForm;
