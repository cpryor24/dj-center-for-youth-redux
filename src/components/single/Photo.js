import React from 'react';
import { connect } from 'react-redux';
import { deletePhoto } from '../../redux/actions/photos.actions';

const Photos = (props) => {

  let handleClick = id => {
    props.deletePPhoto(id)
  }

  return (
    <div>
      <p> {props.photo.img_url} <button onClick={() => handleClick(props.photo.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deletePhoto})(Photos);
