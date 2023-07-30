import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  UPDATE_GAMES_FILTERS,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILURE,
  FETCH_SCREEN_GAME_SUCESS,
} from "./actionTypes";


import { GamesActions, GamesState } from "./types";

const initialState: GamesState = {
  pending: false,
  games: [],
  filters: [
    { key: "genreId", value: null },
    { key: "platfotmId", value: null },
    { key: "sortOrder", value: null },
    { key: "searchText", value: null },
    { key: "pageParam", value: null },
    { key: "pageParam", value: 1 },
  ],
  selectedGame: null,
  screens: null,
  error: null,
  nbPages: null
};

export default (state = initialState, action: GamesActions) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        pending: true,
        filters: action.payload
      };
    case FETCH_GAME_REQUEST:
      return {
        ...state,
        pending: true,
        slug: action.payload.slug,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        pending: false,
        games: action.payload.games,
        nbPages: action.payload.nbPages,
        error: null,
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        pending: false,
        selectedGame: action.payload.game,
        error: null,
      };
    case FETCH_GAME_FAILURE:
      return {
        ...state,
        pending: false,
        selectedGame: null,
        error: action.payload.error,
      };
    case FETCH_GAMES_FAILURE:
      return {
        ...state,
        pending: false,
        games: [],
        error: action.payload.error,
      };
    case UPDATE_GAMES_FILTERS:
      {
        let updatedFilters = state.filters
        const indexFilter = updatedFilters?.findIndex(filter => filter.key === action.filter)

        if (indexFilter != -1)
          updatedFilters.splice(indexFilter, 1)
        updatedFilters.push({
          key: action.filter,
          value: action.value.toString()
        })
        return {
          ...state,
          filters: updatedFilters,
        };
      };
    case FETCH_SCREEN_GAME_SUCESS:
      return {
        ...state,
        screens: action.payload.screens
      }
    default:
      return state
  }
};