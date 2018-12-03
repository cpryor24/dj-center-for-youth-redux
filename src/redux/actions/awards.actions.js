import axios from 'axios';
// export const FETCH_AWARDS_SUCCESS = 'FETCH_AWARDS_SUCCESS';
export const ADD_AWARD = 'ADD_AWARD';
export const EDIT_AWARD = 'EDIT_AWARD'
export const DELETE_AWARD = 'DELETE_AWARD';

const apiURL = 'http://localhost:8000/awards';

export const addAward = (newAward) => {
  return dispatch => {
    axios
      .post(`${apiURL}`, newAward)
      .then(res => dispatch({
        type: ADD_AWARD,
        payload: res.data
      }))
  }
}

export const deleteAward = id => {
  return dispatch => {
    axios
      .delete(`${apiURL}/delete/${id}`)
      .then(res => dispatch({
        type: DELETE_AWARD,
        payload: id
      }));
  };
}

export const editAward = id => {
  return dispatch => {
    axios
      .patch(`${apiURL}/edit/${id}`)
      .then(res => dispatch({
        type: EDIT_AWARD,
        payload: res.data
      }))
  }
}

// export const fetchAwards = () => {
//   return dispatch => {
//     axios
//       .get(`${apiURL}`)
//       .then(res => dispatch({
//         type: FETCH_AWARDS_SUCCESS,
//         payload: res.data
//       }));
//   };
// }
