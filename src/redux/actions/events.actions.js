import axios from 'axios';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT';

const apiURL = 'http://localhost:8000/events';

export const addEvent = (newEvent) => {
  return dispatch => {
    axios
      .post(`${apiURL}`, newEvent)
      .then(res => dispatch({
        type: ADD_EVENT,
        payload: res.data
      }))
  }
}

export const deleteEvent = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/events/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_EVENT,
        payload: id
      }));
  };
}

export const editEvent = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/events/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_EVENT,
        payload: res.data
      }))
  }
}

export const fetchEvents = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: res.data
      }));
  };
}
