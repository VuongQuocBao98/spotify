import * as types from "../constants/ActionType";

const query = (state = "", action) => {
  switch (action.type) {
    case types.ACT_SEARCH:
      return (state = action.payload);
    case types.ACT_SET_ID_ARTIST:
      return (state = action.payload);
    default:
      return state;
  }
};
export default query;
