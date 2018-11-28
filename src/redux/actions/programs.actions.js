import axios from 'axios';
export const FETCH_PROGRAMS_SUCCESS = 'FETCH_PROGRAMS_SUCCESS';
export const FETCH_SECONDARYPROGRAMS_SUCCESS = 'FETCH_SECONDARYPROGRAMS_SUCCESS';
export const FETCH_ALL = 'FETCH_ALL';
export const ADD_PROGRAM = 'ADD_PROGRAM';
export const EDIT_PROGRAM = 'EDIT_PROGRAM'
export const DELETE_PROGRAM = 'DELETE_PROGRAM';

const apiURL = 'http://localhost:8000/';

export const addProgram = (title, description) => {
  return dispatch => {
    axios
      .post(`${apiURL}/programs/add`, {title, description })
      .then(res => dispatch({
        type: ADD_PROGRAM,
        payload: res.data
      }))
  }
}

export const deleteProgram = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/programs/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_PROGRAM,
        payload: res.data
      }));
  };
}

export const editProgram = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/programs/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_PROGRAM,
        payload: res.data
      }))
  }
}

export const fetchPrograms = () => {
  return dispatch => {
    const promises = [];
    promises.push(axios.get(`${apiURL}`).then(res => dispatch({type: FETCH_PROGRAMS_SUCCESS, payload: res.data})));
    promises.push(axios.get(`${apiURL}`).then(res => dispatch({type: FETCH_SECONDARYPROGRAMS_SUCCESS, payload: res.data})));

    return dispatch => {
      Promise.all(promises).then(res => dispatch({
        type: FETCH_ALL,
        payload: res.data
      }))
    }
  };
}
