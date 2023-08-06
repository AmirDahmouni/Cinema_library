import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  UPDATE_MOVIES_FILTERS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./actionTypes";


import { MoviesActions, MoviesState } from "./types";

const initialState: MoviesState = {
  pending: false,
  movies: [],
  filters: [
    { key: "genreId", value: null },
    { key: "language", value: null },
    { key: "sortOrder", value: null },
    { key: "searchText", value: null },
    { key: "pageParam", value: 1 },
  ],
  selectedMovie: null,
  error: null,
  nbPages: null
};

export default function reducer(state = initialState, action: MoviesActions) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
        filters: action.payload
      };
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        pending: true,
        slug: action.payload.slug,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.payload.movies,
        nbPages: action.payload.nbPages,
        error: null,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        selectedMovie: action.payload.movie,
        error: null,
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        pending: false,
        selectedMovie: null,
        error: action.payload.error,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        movies: [],
        error: action.payload.error,
      };
    case UPDATE_MOVIES_FILTERS:
      {
        let updatedFilters = state.filters
        const indexFilter = updatedFilters?.findIndex(filter => filter.key === action.filter)

        if (indexFilter != -1)
          updatedFilters.splice(indexFilter, 1)
        updatedFilters.push({
          key: action.filter,
          value: action.value?.toString() || null
        })
        return {
          ...state,
          filters: updatedFilters,
        };
      };
    default:
      return state
  }
};