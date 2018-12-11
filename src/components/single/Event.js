import React from 'react';
import {connect} from 'react-redux';
import {deleteEvent} from '../../redux/actions/events.actions';

const Events = (props) => {

  let handleClick = (id) => {
    props.deleteEvent(id);
  }

  return (
    <div>
      <p> {props.event.title}: {props.event.description} {props.event.img_url} {props.event.date} {props.event.time} {props.event.venue} {props.event.address}<button onClick={() => handleClick(props.event.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deleteEvent})(Events);
