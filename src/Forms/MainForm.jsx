import React from 'react';
import PropTypes from 'prop-types';


function MainForm(props) {
  return (
    <form className="ui form" onSubmit={props.onSubmit}>

      <div className="required field">
        <label htmlFor="title">Recipe Title</label>
        <input type="text" name="title" id="title" placeholder="Recipe Title" />
      </div>

      <div className="field">
        <label htmlFor="Description">Recipe Description</label>
        <textarea
          rows="3"
          placeholder="Enter Recipe Description"
          name="description"
          id="description"
        />
      </div>

      <div className="required two fields">
        <div className="field">
          <label htmlFor="prep">Prep Time</label>
          <input type="number" name="prep" id="prep" placeholder="Prep Time in mins" />
        </div>

        <div className="field">
          <label htmlFor="cooking">Cooking Time</label>
          <input
            type="number"
            name="cooking"
            id="cooking"
            placeholder="Cooking Time in mins"
          />
        </div>
      </div>

      <div className="field">

        <button type="submit" className="ui teal right labeled icon button right floated">
          Next
          <i className="arrow right icon" />
        </button>
      </div>

      <div className="field" />

    </form>
  );
}

MainForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MainForm;
