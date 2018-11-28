import {
  ADD_BOARDOFDIRECTOR,
  DELETE_BOARDOFDIRECTOR,
  EDIT_BOARDOFDIRECTOR,
  FETCH_BOARDOFDIRECTORS_SUCCESS
} from '../actions/boardofdirectors.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOARDOFDIRECTOR:
      return [...state, action.payload];

    case DELETE_BOARDOFDIRECTOR:
      let selectedId = action.payload;
      return state.filter(boardOfDirector => boardOfDirector.id !== Number(selectedId));

    case EDIT_BOARDOFDIRECTOR:
      let memberId = action.payload;
      return state.filter(boardOfDirector => boardOfDirector.id !== Number(memberId));

    case FETCH_BOARDOFDIRECTORS_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
}
