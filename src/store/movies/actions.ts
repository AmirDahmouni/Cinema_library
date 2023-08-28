import {
  FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, UPDATE_MOVIES_FILTERS,
  FETCH_MOVIE_REQUEST, FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS
} from "./actionTypes";
import {
  FetchMoviesSuccessPayload,
  FetchMoviesFailurePayload,
  FetchMovieSuccessPayload,
  FetchMovieFailurePayload,
  FetchMovieRequestPayload,
  MoviesActions
} from "./types";


export const fetchMoviesRequest = (payload: { key: string, value: string | number | null }[]): MoviesActions => ({
  type: FETCH_MOVIES_REQUEST,
  payload
});

export const fetchMoviesSuccess = (payload: FetchMoviesSuccessPayload): MoviesActions => ({
  type: FETCH_MOVIES_SUCCESS,
  payload,
});

export const fetchMoviesFailure = (payload: FetchMoviesFailurePayload): MoviesActions => ({
  type: FETCH_MOVIES_FAILURE,
  payload,
});

export const fetchMovieRequest = (payload: FetchMovieRequestPayload): MoviesActions => ({
  type: FETCH_MOVIE_REQUEST,
  payload
});

export const fetchMovieSuccess = (payload: FetchMovieSuccessPayload): MoviesActions => ({
  type: FETCH_MOVIE_SUCCESS,
  payload,
});

export const fetchMovieFailure = (payload: FetchMovieFailurePayload): MoviesActions => ({
  type: FETCH_MOVIE_FAILURE,
  payload,
});

export const updateMoviesFilters = (filter: string, value: Number | string | null): MoviesActions => ({
  type: UPDATE_MOVIES_FILTERS,
  filter,
  value
})



