import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addBoardOfDirector } from '../../redux/actions/boardofdirectors.actions';

class AddBoardForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    title: ''
  }

  handleFirstNameChange = (e) => {
    this.setState({
      first_name: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      last_name: e.target.value
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBoardOfDirector(this.state)
    this.setState({
      first_name: '',
      last_name: '',
      title: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            onChange={this.handleFirstNameChange}
            value={this.state.first_name}
            placeholder="Enter First Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            onChange={this.handleLastNameChange}
            value={this.state.last_name}
            placeholder="Enter Last Name" />
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

export default connect(null, { addBoardOfDirector })(AddBoardForm);
