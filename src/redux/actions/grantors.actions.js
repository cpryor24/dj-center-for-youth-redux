import axios from 'axios';
export const FETCH_GRANTORS_SUCCESS = 'FETCH_GRANTORS_SUCCESS';
export const ADD_GRANTOR = 'ADD_GRANTOR';
export const EDIT_GRANTOR = 'EDIT_GRANTOR'
export const DELETE_GRANTOR = 'DELETE_GRANTOR';

const apiURL = 'http://localhost:8000/grantors';

export const addGrantor = (newGrantor) => {
  return dispatch => {
    axios
      .post(`${apiURL}`, newGrantor)
      .then(res => dispatch({
        type: ADD_GRANTOR,
        payload: res.data
      }))
  }
}

export const deleteGrantor = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_GRANTOR,
        payload: id
      }));
  };
}

export const editGrantor = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_GRANTOR,
        payload: res.data
      }))
  }
}

export const fetchGrantors = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_GRANTORS_SUCCESS,
        payload: res.data
      }));
  };
}
