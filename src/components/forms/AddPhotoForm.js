import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addPhoto } from '../../redux/actions/photos.actions';

class AddPhotoForm extends Component {
  state = {
    secondaryProgram_id: '',
    url: ''
  }

  handleCompanyNameChange = (e) => {
    this.setState({
      secondaryProgram_id: e.target.value
    })
  }

  handleURLChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPhoto(this.state)
    this.setState({
      secondaryProgram_id: '',
      url: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="secondaryProgram_id">Secondary Program</Label>
          <Input
            type="text"
            name="secondaryProgram_id"
            id="secondaryProgram_id"
            onChange={this.handleCompanyNameChange}
            value={this.state.secondaryProgram_id}
            placeholder="Enter Secondary Program"
          />
        </FormGroup>
        <FormGroup>
          <Label for="url">URL</Label>
          <Input
            type="text"
            name="url"
            id="url"
            onChange={this.handleURLChange}
            value={this.state.url}
            placeholder="Enter URL" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addPhoto })(AddPhotoForm);
