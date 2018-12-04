import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addServiceLearning } from '../../redux/actions/servicelearning.actions';

class AddServiceLearningForm extends Component {
  state = {
    description: '',
    title: '',
    grantor_id: '',
    program_id: ''
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

  handleGrantorChange = (e) => {
    this.setState({
      grantor_id: e.target.value
    })
  }
  handleProgramChange = (e) => {
    this.setState({
      program_id: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addServiceLearning(this.state)
    this.setState({
      description: '',
      title: '',
      grantor_id: '',
      program_id: ''
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
        <FormGroup>
          <Label for="grantor">Grantor</Label>
          <Input
            type="text"
            name="grantor"
            id="grantor"
            onChange={this.handleGrantorChange}
            value={this.state.grantor_id}
            placeholder="Enter Grantor" />
        </FormGroup>
        <FormGroup>
          <Label for="program">Program</Label>
          <Input
            type="text"
            name="program"
            id="program"
            onChange={this.handleProgramChange}
            value={this.state.program}
            placeholder="Enter Program" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addServiceLearning })(AddServiceLearningForm);
