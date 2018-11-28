import axios from 'axios';
export const FETCH_AWARDS_SUCCESS = 'FETCH_AWARDS_SUCCESS';
export const ADD_AWARD = 'ADD_AWARD';
export const EDIT_AWARD = 'EDIT_AWARD'
export const DELETE_AWARD = 'DELETE_AWARD';

const apiURL = 'http://localhost:8000/';

export const addAward = (title, url) => {
  return dispatch => {
    axios
      .post(`${apiURL}/awards/add`, {title, url })
      .then(res => dispatch({
        type: ADD_AWARD,
        payload: res.data
      }))
  }
}

export const deleteAward = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/awards/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_AWARD,
        payload: res.data
      }));
  };
}

export const editAward = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/awards/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_AWARD,
        payload: res.data
      }))
  }
}

export const fetchAwards = () => {
  return dispatch => {
    axios
      .get(`${apiURL}`)
      .then(res => dispatch({
        type: FETCH_AWARDS_SUCCESS,
        payload: res.data
      }));
  };
}
