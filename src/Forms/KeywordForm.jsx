import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Header, Divider, List } from 'semantic-ui-react';

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
      .map((item, index) => <List.Item key={index}>{item}</List.Item>);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field
          placeholder="Keyword"
          name="keyword"
          value={this.state.keyword}
          handleChange={this.handleChange}
        />

        <Form.Field>
          <Button fluid color="orange" type="submit">Add Keyword</Button>
        </Form.Field>

        <Form.Field>
          <Header as="h3">
            <Divider horizontal>List of Keywords</Divider>
          </Header>
          <List bulleted>{keywords}</List>
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
            icon="file text outline"
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

KeywordForm.propTypes = {
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
};

export default KeywordForm;


