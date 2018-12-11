import React from 'react';
import { connect } from 'react-redux';
import { deleteYoutube } from '../../redux/actions/youtube.actions';

const Youtube = (props) => {

  let handleClick = id => {
    props.deleteYoutube(id)
  }

  return (
    <div>
      <p> {props.video.video_url} <button onClick={() => handleClick(props.video.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, {deleteYoutube})(Youtube);
