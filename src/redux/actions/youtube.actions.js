import axios from 'axios';
export const FETCH_YOUTUBE_SUCCESS = 'FETCH_YOUTUBE_SUCCESS';
export const ADD_YOUTUBE = 'ADD_YOUTUBE';
export const EDIT_YOUTUBE = 'EDIT_YOUTUBE'
export const DELETE_YOUTUBE = 'DELETE_YOUTUBE';

const apiURL = 'http://localhost:8000/';

export const addYoutube = (title, url) => {
  return dispatch => {
    axios
      .post(`${apiURL}/youtube/add`, {title, url })
      .then(res => dispatch({
        type: ADD_YOUTUBE,
        payload: res.data
      }))
  }
}

export const deleteYoutube = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/youtube/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_YOUTUBE,
        payload: res.data
      }));
  };
}

export const editYoutube = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/youtube/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_YOUTUBE,
        payload: res.data
      }))
  }
}

export const fetchYoutubes = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_YOUTUBE_SUCCESS,
        payload: res.data
      }));
  };
}
