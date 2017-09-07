import React from 'react';
import PropTypes from 'prop-types';


import Field from './Field.jsx';

class IngredientForm extends React.Component {
  state = {
    ingredient: '',
    ingredients: [],
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.props.onSubmit}>

        <Field
          placeholder="Ingredient"
          name="ingredient"
          value={this.state.ingredient}
        />

        <div className="field">
          <button type="button" className="ui orange button fluid">
            Add Ingredient
          </button>
        </div>

        <div className="field">
          <h3 className="ui horizontal divider header">
            View Ingredients
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

IngredientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
};

export default IngredientForm;
