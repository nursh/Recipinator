import React from 'react';
import PropTypes from 'prop-types';


import Field from './Field.jsx';
import { store } from './formState';

class KeywordForm extends React.Component {
  state = {
    keyword: '',
  };

  handleChange = ({ value }) => {
    let { keyword } = this.state;
    keyword = value;
    this.setState({ keyword });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'KEYWORDS', keyword: this.state.keyword });
    this.setState({ keyword: '' });
  }

  render() {
    const keywords = this.props.keywords
      .map((item, index) => <div className="item" key={index}>{item}</div>);
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="required field">
          <Field
            placeholder="Keyword"
            name="keyword"
            value={this.state.keyword}
            handleChange={this.handleChange}
          />
        </div>

        <div className="field">
          <button type="submit" className="ui orange button fluid">
            Add Keyword
          </button>
        </div>

        <div className="field">
          <h3 className="ui horizontal divider header">
            View Keywords
          </h3>
          <div className="ui bulleted list">{keywords}</div>
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
            onClick={this.props.onSubmit}
          >
            <i className="file text outline icon" />
            Create Recipe
          </button>
        </div>

        <div className="field" />

      </form>
    );
  }
}

KeywordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
};

export default KeywordForm;
