import axios from 'axios';
export const FETCH_YOUTUBE_SUCCESS = 'FETCH_YOUTUBE_SUCCESS';
export const ADD_YOUTUBE = 'ADD_YOUTUBE';
export const EDIT_YOUTUBE = 'EDIT_YOUTUBE'
export const DELETE_YOUTUBE = 'DELETE_YOUTUBE';

const apiURL = 'http://localhost:8000/youtube';

export const addYoutube = (newYoutube) => {
  return dispatch => {
    axios
      .post(`${apiURL}`, newYoutube)
      .then(res => dispatch({
        type: ADD_YOUTUBE,
        payload: res.data
      }))
  }
}

export const deleteYoutube = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_YOUTUBE,
        payload: id
      }));
  };
}

export const editYoutube = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_YOUTUBE,
        payload: res.data
      }))
  }
}

export const fetchYoutube = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_YOUTUBE_SUCCESS,
        payload: res.data
      }));
  };
}
