import React from 'react';
import PropTypes from 'prop-types';
import isNumeric from 'validator/lib/isNumeric';
import isAlpha from 'validator/lib/isAlpha';


import Field from './Field.jsx';
import TextField from './TextField.jsx';

class MainForm extends React.Component {
  state = {
    title: '',
    description: '',
    imageUrl: '',
    prep: '',
    cooking: '',
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.props.onSubmit}>
        <Field
          placeholder="Recipe Title"
          name="title"
          value={this.state.title}
          validate={val => (val && isAlpha(val) ? false : 'Title is Required and should only contain letters')}
        />

        <TextField
          placeholder="Enter Recipe Description"
          name="description"
          value={this.state.description}
        />

        <Field
          placeholder="Image Url"
          name="Image Url"
          value={this.state.imageUrl}
          validate={val => (val && isAlpha(val) ? false : 'Image Url is Required and should only contain letters')}
        />

        <div className="required two fields">
          <Field
            placeholder="Prep Time in mins"
            name="prep"
            value={this.state.prep}
            validate={val => (val && isNumeric(val) ? false : 'PrepTime should only contain numbers')}
          />

          <Field
            placeholder="Cooking Time in mins"
            name="cooking"
            value={this.state.prep}
            validate={val => (val && isNumeric(val) ? false : 'Cooking Time should only contain numbers')}
          />
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
}


export default MainForm;
