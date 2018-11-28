import axios from 'axios';
export const FETCH_BOARDOFDIRECTORS_SUCCESS = 'FETCH_BOARDOFDIRECTORS_SUCCESS';
export const ADD_BOARDOFDIRECTOR = 'ADD_BOARDOFDIRECTOR';
export const EDIT_BOARDOFDIRECTOR = 'EDIT_BOARDOFDIRECTOR'
export const DELETE_BOARDOFDIRECTOR = 'DELETE_BOARDOFDIRECTOR';

const apiURL = 'http://localhost:8000/boardofdirectors';

export const addResource = (firstName, lastName, title) => {
  return dispatch => {
    axios
      .post(`${apiURL}/add`, {firstName, lastName, title })
      .then(res => dispatch({
        type: ADD_BOARDOFDIRECTOR,
        payload: res.data
      }))
  }
}

export const deleteResource = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_BOARDOFDIRECTOR,
        payload: res.data
      }));
  };
}

export const editResource = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_BOARDOFDIRECTOR,
        payload: res.data
      }))
  }
}

export const fetchResources = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_BOARDOFDIRECTORS_SUCCESS,
        payload: res.data
      }));
  };
}
