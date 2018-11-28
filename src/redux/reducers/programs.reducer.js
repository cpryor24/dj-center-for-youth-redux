import {
  ADD_PROGRAM,
  DELETE_PROGRAM,
  EDIT_PROGRAM,
  FETCH_PROGRAMS_SUCCESS,
  FETCH_SECONDARYPROGRAMS_SUCCESS,
  FETCH_ALL
} from '../actions/programs.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROGRAM:
      return [...state, action.payload];

    case DELETE_PROGRAM:
      let selectedId = action.payload;
      return state.filter(program => program.id !== Number(selectedId));

    case EDIT_PROGRAM:
      let theselectedId = action.payload;
      return state.filter(program => program.id !== Number(theselectedId));

    case FETCH_PROGRAMS_SUCCESS:
      return action.payload;

    case FETCH_SECONDARYPROGRAMS_SUCCESS:
      return action.payload;

    case FETCH_ALL:
      return action.payload;

    default:
      return state;
  }
}
