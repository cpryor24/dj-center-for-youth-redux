import React from 'react';
import AddYoutubeForm from '../forms/AddYoutubeForm';
import { connect } from 'react-redux';

const YoutubeList = (props) => {
  return (
    <div>
      <AddYoutubeForm />
    </div>
  )
}

export default connect(null)(YoutubeList);
