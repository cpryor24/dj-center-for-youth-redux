import axios from 'axios';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT';

const apiURL = 'http://localhost:8000/events';

export const addAward = (title, description, img_url, date, time, venue, address, isActive) => {
  return dispatch => {
    axios
      .post(`${apiURL}/events/add`, {title, description, img_url, date, time, venue, address, isActive})
      .then(res => dispatch({
        type: ADD_EVENT,
        payload: res.data
      }))
  }
}

export const deleteAward = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/events/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_EVENT,
        payload: res.data
      }));
  };
}

export const editAward = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/events/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_EVENT,
        payload: res.data
      }))
  }
}

export const fetchAwards = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: res.data
      }));
  };
}
