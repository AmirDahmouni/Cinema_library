import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE,
  SELECT_GENRE_FILTER
} from "./actionTypes";

import { GenresActions, GenresState } from "./types";

const initialState: GenresState = {
  pending: false,
  genres: [],
  selectedGenre: null,
  error: null,
};

export default (state = initialState, action: GenresActions) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        pending: false,
        genres: action.genres,
        error: null,
      };
    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        pending: false,
        genres: [],
        error: action.payload.error,
      };
    case SELECT_GENRE_FILTER:
      return {
        ...state,
        selectedGenre: action.genre
      };
    default:
      return {
        ...state,
      };
  }
};