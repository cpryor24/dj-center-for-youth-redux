import React from 'react';
import AddPhotoForm from '../forms/AddPhotoForm';
import { connect } from 'react-redux';

const PhotosList = (props) => {
  return (
    <div>
      <AddPhotoForm />
    </div>
  )
}

export default connect(null)(PhotosList);
