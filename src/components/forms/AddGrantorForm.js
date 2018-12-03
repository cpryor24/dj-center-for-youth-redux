import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addGrantor } from '../../redux/actions/grantors.actions';

class AddGrantorForm extends Component {
  state = {
    description: '',
    title: ''
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGrantor(this.state)
    this.setState({
      description: '',
      title: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={this.handleDescriptionChange}
            value={this.state.description}
            placeholder="Enter Description" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={this.handleTitleChange}
            value={this.state.title}
            placeholder="Enter Title" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addGrantor })(AddGrantorForm);
