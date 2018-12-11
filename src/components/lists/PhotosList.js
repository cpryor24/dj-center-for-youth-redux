import React from 'react';
import AddPhotoForm from '../forms/AddPhotoForm';
import Photo from '../single/photo';
import { connect } from 'react-redux';

const PhotosList = (props) => {
  let listOfPhotos = props.photos.map(photo => <Photo key={photo.id} photo={photo}/>)
  return (
    <div>
      <AddPhotoForm />
      {listOfPhotos}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(PhotosList);
