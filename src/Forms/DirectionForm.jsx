import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Header, Divider, List } from 'semantic-ui-react';


import TextField from './TextField.jsx';
import { store } from './formState';

class DirectionForm extends React.Component {
  state = {
    direction: '',
  };

  handleChange = ({ value }) => {
    let { direction } = this.state;
    direction = value;
    this.setState({ direction });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'DIRECTIONS', direction: this.state.direction });
    this.setState({ direction: '' });
  }

  render() {
    const directions = this.props.directions
      .map((item, index) => <List.Item key={index} as="li">{item}</List.Item>);
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextField
          placeholder="Direction"
          name="direction"
          handleChange={this.handleChange}
          value={this.state.direction}
        />

        <Form.Field>
          <Button fluid color="orange" type="submit">Add Direction</Button>
        </Form.Field>

        <Form.Field>
          <Header as="h3">
            <Divider horizontal>Directions</Divider>
          </Header>
          <List as="ol">{directions}</List>
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

DirectionForm.propTypes = {
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  directions: PropTypes.arrayOf(PropTypes.string),
};

export default DirectionForm;

