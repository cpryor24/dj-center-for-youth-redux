import {
  ADD_SECONDARYPROGRAM,
  DELETE_SECONDARYPROGRAM,
  EDIT_SECONDARYPROGRAM,
  FETCH_SECONDARYPROGRAMS_SUCCESS
} from '../actions/secondaryprograms.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_SECONDARYPROGRAM:
      return [...state, action.payload];

    case DELETE_SECONDARYPROGRAM:
      let selectedId = action.payload;
      return state.filter(secProgram => secProgram.id !== Number(selectedId));

    case EDIT_SECONDARYPROGRAM:
      let theSelectedId = action.payload;
      return state.filter(secProgram => secProgram.id !== Number(theSelectedId));

    case FETCH_SECONDARYPROGRAMS_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
}
