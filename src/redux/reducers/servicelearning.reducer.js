import {
  ADD_SERVICELEARNING,
  DELETE_SERVICELEARNING,
  EDIT_SERVICELEARNING,
  FETCH_SERVICELEARNING_SUCCESS
} from '../actions/servicelearning.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_SERVICELEARNING:
      return [...state, action.payload];

    case DELETE_SERVICELEARNING:
      let selectedId = action.payload;
      return state.filter(secProgram => secProgram.id !== Number(selectedId));

    case EDIT_SERVICELEARNING:
      let theSelectedId = action.payload;
      return state.filter(secProgram => secProgram.id !== Number(theSelectedId));

    case FETCH_SERVICELEARNING_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
