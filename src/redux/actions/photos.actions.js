import axios from 'axios';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const ADD_PHOTO = 'ADD_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const EDIT_PHOTO = 'EDIT_PHOTO';

const apiURL = 'http://localhost:8000/photos';

export const addPhoto = (img_url, secondaryProgram_id) => {
  return dispatch({
    axios.post(`${apiURL}/add`, {img_url, secondaryProgram_id})
      .then(res => dispatch({
        type: ADD_PHOTO,
        payload: res.data
      }))
  })
}

export const deletePhoto = id => {
  return dispatch({
    axios.delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_PHOTO,
        payload: res.data
      }))
  })
}

export const editPhoto = id => {
  return dispatch({
    axios.patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_PHOTO,
        payload: res.data
      }))
  })
}

export const fetchPhotos = () => {
  return dispatch({
    axios.get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: res.data
      }))
  })
}
