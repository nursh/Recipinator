import React from 'react';


function IngredientForm() {
  return (
    <form className="ui form">

      <div className="field">
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" name="ingredient" id="ingredient" placeholder="Ingredient" />
      </div>

      <div className="field">
        <button type="button" className="ui teal labeled icon button left floated">
          <i className="arrow left icon" />
          Previous
        </button>

        <button type="button" className="ui teal right labeled icon button right floated">
          Next
          <i className="arrow right icon" />
        </button>
      </div>

      <div className="field" />

    </form>
  );
}

export default IngredientForm;
