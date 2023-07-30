import {
  FETCH_GAMES_REQUEST, FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS, UPDATE_GAMES_FILTERS,
  FETCH_GAME_REQUEST, FETCH_GAME_FAILURE, FETCH_GAME_SUCCESS,
  FETCH_SCREEN_GAME_REQUEST,
  FETCH_SCREEN_GAME_SUCESS
} from "./actionTypes";
import {
  FetchGamesSuccessPayload,
  FetchGamesFailurePayload,
  FetchGameSuccessPayload,
  FetchGameFailurePayload,
  FetchGameScreensSucessPayload,
  FetchGameRequestPayload,
  GamesActions
} from "./types";


export const fetchGamesRequest = (payload: { key: string, value: string }[]): GamesActions => ({
  type: FETCH_GAMES_REQUEST,
  payload
});

export const fetchGamesSuccess = (payload: FetchGamesSuccessPayload): GamesActions => ({
  type: FETCH_GAMES_SUCCESS,
  payload,
});

export const fetchGamesFailure = (payload: FetchGamesFailurePayload): GamesActions => ({
  type: FETCH_GAMES_FAILURE,
  payload,
});

export const fetchGameRequest = (payload: FetchGameRequestPayload): GamesActions => ({
  type: FETCH_GAME_REQUEST,
  payload
});

export const fetchGameSuccess = (payload: FetchGameSuccessPayload): GamesActions => ({
  type: FETCH_GAME_SUCCESS,
  payload,
});

export const fetchGameFailure = (payload: FetchGameFailurePayload): GamesActions => ({
  type: FETCH_GAME_FAILURE,
  payload,
});

export const updateGamesFilters = (filter: string, value: Number | string): GamesActions => ({
  type: UPDATE_GAMES_FILTERS,
  filter,
  value
})

export const fetchScreenGame = (payload: { game: string }): GamesActions => ({
  type: FETCH_SCREEN_GAME_REQUEST,
  payload
})

export const fetchScreenGameSuccess = (payload: FetchGameScreensSucessPayload): GamesActions => ({
  type: FETCH_SCREEN_GAME_SUCESS,
  payload
})