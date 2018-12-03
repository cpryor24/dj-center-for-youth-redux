import {
  ADD_AWARD,
  DELETE_AWARD,
  EDIT_AWARD
  // FETCH_AWARDS_SUCCESS
} from '../actions/awards.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_AWARD:
      return [...state, action.payload];

    case DELETE_AWARD:
      let selectedId = action.payload;
      return state.filter(award => award.id !== Number(selectedId));

    case EDIT_AWARD:
      let itemId = action.payload;
      return state.filter(award => award.id !== Number(itemId));

    // case FETCH_AWARDS_SUCCESS:
    //   return action.payload;

    default:
      return state;
  }
}
