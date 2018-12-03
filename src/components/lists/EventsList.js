import React from 'react';
import AddEventForm from '../forms/AddEventForm';
import { connect } from 'react-redux';

const EventsList = (props) => {
  return (
    <div>
      <AddEventForm />
    </div>
  )
}

export default connect(null)(EventsList);
