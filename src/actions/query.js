import * as types from "../constants/ActionType";
export const actSearch = (query) => {
  return {
    type: types.ACT_SEARCH,
    payload: query,
  };
};

export const actSetIdArtist = (query) => {
  return {
    type: types.ACT_SET_ID_ARTIST,
    payload: query,
  };
};
