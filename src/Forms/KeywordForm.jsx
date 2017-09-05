import React from 'react';
import PropTypes from 'prop-types';

function KeywordForm(props) {
  return (
    <form className="ui form" onSubmit={props.onSubmit}>

      <div className="required field">
        <label htmlFor="keyword">Keyword</label>
        <input type="text" name="keyword" id="keyword" placeholder="Keyword" />
      </div>

      <div className="field">
        <button type="button" className="ui orange button fluid">
          Add Keyword
        </button>
      </div>

      <div className="field">
        <h3 className="ui horizontal divider header">
          View Keywords
        </h3>
      </div>

      <div className="field">
        <button type="button" className="ui teal labeled icon button left floated" onClick={props.onPreviousPage}>
          <i className="arrow left icon" />
          Previous
        </button>

        <button type="submit" className="ui teal right labeled icon button right floated">
          <i className="file text outline icon" />
          Create Recipe
        </button>
      </div>

      <div className="field" />

    </form>
  );
}

KeywordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
}

export default KeywordForm;
