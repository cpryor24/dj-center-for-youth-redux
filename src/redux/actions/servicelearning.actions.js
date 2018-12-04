import axios from 'axios';
export const FETCH_SERVICELEARNING_SUCCESS = 'FETCH_SERVICELEARNING_SUCCESS';
export const ADD_SERVICELEARNING = 'ADD_SERVICELEARNING';
export const EDIT_SERVICELEARNING = 'EDIT_SERVICELEARNING';
export const DELETE_SERVICELEARNING = 'DELETE_SERVICELEARNING';

const apiURL = 'http://localhost:8000/servicelearning';

export const addServiceLearning = (newServiceLearning) => {
  return dispatch => {
    axios
      .post(`${apiURL}`, newServiceLearning)
      .then(res => dispatch({
        type: ADD_SERVICELEARNING,
        payload: res.data
      }))
  }
}

export const deleteServiceLearning = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_SERVICELEARNING,
        payload: id
      }));
  };
}

export const editServiceLearning = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_SERVICELEARNING,
        payload: res.data
      }))
  }
}

export const fetchServiceLearning = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_SERVICELEARNING_SUCCESS,
        payload: res.data
      }));
  };
}
