import axios from 'axios';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const EDIT_RESOURCE = 'EDIT_RESOURCE'
export const DELETE_RESOURCE = 'DELETE_RESOURCE';

const apiURL = 'http://localhost:8000/';

export const addResource = (title, url) => {
  return dispatch => {
    axios
      .post(`${apiURL}/add`, {title, url })
      .then(res => dispatch({
        type: ADD_RESOURCE,
        payload: res.data
      }))
  }
}

export const deleteResource = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_RESOURCE,
        payload: res.data
      }));
  };
}

export const editResource = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_RESOURCE,
        payload: res.data
      }))
  }
}

export const fetchResources = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_RESOURCES_SUCCESS,
        payload: res.data
      }));
  };
}
