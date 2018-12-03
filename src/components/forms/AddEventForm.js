import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addEvent } from '../../redux/actions/events.actions';

class AddEventForm extends Component {
  state = {
    img_url: '',
    description: '',
    title: '',
    date: '',
    time: '',
    venue: '',
    address: ''
  }

  handleFirstNameChange = (e) => {
    this.setState({
      img_url: e.target.value
    })
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

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleTimeChange = (e) => {
    this.setState({
      time: e.target.value
    })
  }

  handleVenueChange = (e) => {
    this.setState({
      venue: e.target.value
    })
  }

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state)
    this.setState({
      img_url: '',
      description: '',
      title: '',
      date: '',
      time: '',
      venue: '',
      address: ''
    })
    e.target.reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="img_url">Image URL</Label>
          <Input
            type="text"
            name="img_url"
            id="img_url"
            onChange={this.handleIMGURLChange}
            value={this.state.img_url}
            placeholder="Enter Image URL"
          />
        </FormGroup>
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
          <Label for="date">Date</Label>
          <Input
            type="text"
            name="date"
            id="date"
            onChange={this.handleDateChange}
            value={this.state.date}
            placeholder="Enter Date" />
        </FormGroup>
        <FormGroup>
          <Label for="time">Time</Label>
          <Input
            type="text"
            name="time"
            id="time"
            onChange={this.handleTimeChange}
            value={this.state.time}
            placeholder="Enter Time" />
        </FormGroup>
        <FormGroup>
          <Label for="venue">Venue</Label>
          <Input
            type="text"
            name="venue"
            id="venue"
            onChange={this.handleVenueChange}
            value={this.state.venue}
            placeholder="Enter Venue" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            onChange={this.handleAddressChange}
            value={this.state.address}
            placeholder="Enter Address" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { addEvent })(AddEventForm);
