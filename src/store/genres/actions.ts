import { FETCH_GENRES_REQUEST, FETCH_GENRES_FAILURE, FETCH_GENRES_SUCCESS, SELECT_GENRE_FILTER } from "./actionTypes";
import {
  FetchGenresSuccessPayload,
  FetchGenresFailurePayload,
  GenresActions
} from "./types";


export const fetchGenresRequest = (): GenresActions => ({
  type: FETCH_GENRES_REQUEST,
});

export const fetchGenresSuccess = (genres: FetchGenresSuccessPayload): GenresActions => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenresFailure = (payload: FetchGenresFailurePayload): GenresActions => ({
  type: FETCH_GENRES_FAILURE,
  payload,
});

export const selectGenreFilter = (genre: string): GenresActions => ({
  type: SELECT_GENRE_FILTER,
  genre,
})