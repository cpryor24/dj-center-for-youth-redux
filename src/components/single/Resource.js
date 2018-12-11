import React from 'react';
import { connect } from 'react-redux';
import { deleteResource } from '../../redux/actions/resources.actions';

const Resource = (props) => {

  let handleClick = id => {
    props.deleteResource(id)
  }

  return (
    <div><p>{props.resource.business_name} {props.resource.url} <button onClick={() => handleClick(props.resource.id)}>Remove</button></p></div>
  )
}

export default connect(null, {deleteResource})(Resource);
