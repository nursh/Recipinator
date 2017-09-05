import React from 'react';


function MainForm() {
  return (
    <form className="ui form">

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

export default MainForm;
