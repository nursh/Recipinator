import React from 'react';
import { Form } from 'semantic-ui-react';


export default class ImageUploadForm extends React.Component {

  handleSubmit = (evt) => {
    const { name, value } = evt.target;
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <Form.Field required>
          <label htmlFor="imageFile">Image File</label>
          <Input
            name="imageFile"
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={this.handleImage}
          />
        </Form.Field>
      </Form>
    );
  }
}
