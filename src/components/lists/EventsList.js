import React from 'react';
import AddEventForm from '../forms/AddEventForm';
import Event from '../single/event';
import { connect } from 'react-redux';

const EventsList = (props) => {
  let listOfEvents = props.events.map(event => <Event key={event.id} event={event} />)
  return (
    <div>
      <AddEventForm />
      {listOfEvents}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(EventsList);
