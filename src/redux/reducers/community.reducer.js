import {
    ADD_COMMUNITY_PARTNER,
    DELETE_COMMUNITY_PARTNER,
    EDIT_COMMUNITY_PARTNER,
    FETCH_COMMUNITY_PARTNERS_SUCCESS
} from '../actions/community.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_COMMUNITY_PARTNER:
      return [...state, action.payload];

    case DELETE_COMMUNITY_PARTNER:
      let selectedId = action.payload;
      return state.filter(communityPartner => communityPartner.id !== Number(selectedId));

    case EDIT_COMMUNITY_PARTNER:
      let theSelectedId = action.payload;
      return state.filter(communityPartner => communityPartner.id !== Number(theSelectedId));

    case FETCH_COMMUNITY_PARTNERS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
