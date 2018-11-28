import axios from 'axios';
// export const FETCH_SECONDARYPROGRAMS_SUCCESS = 'FETCH_SECONDARYPROGRAMS_SUCCESS';
export const ADD_SECONDARYPROGRAM = 'ADD_SECONDARYPROGRAM';
export const EDIT_SECONDARYPROGRAM = 'EDIT_SECONDARYPROGRAM'
export const DELETE_SECONDARYPROGRAM = 'DELETE_SECONDARYPROGRAM';

const apiURL = 'http://localhost:8000/';

export const addSecondaryProgram = (title, description, grantors_id, program_id) => {
  return dispatch => {
    axios
      .post(`${apiURL}/programs/:secondaryprograms/add`, {title, description, grantors_id, program_id })
      .then(res => dispatch({
        type: ADD_SECONDARYPROGRAM,
        payload: res.data
      }))
  }
}

export const deleteSecondaryProgram = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/programs/:secondaryprograms/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_SECONDARYPROGRAM,
        payload: res.data
      }));
  };
}

export const editSecondaryProgram = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/programs/:secondaryprograms/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_SECONDARYPROGRAM,
        payload: res.data
      }))
  }
}

// export const fetchSecondaryPrograms = () => {
//   return dispatch => {
//     axios
//       .get(`${apiURL}`)
//       .then(res => dispatch({
//         type: FETCH_SECONDARYPROGRAMS_SUCCESS,
//         payload: res.data
//       }));
//   };
// }
