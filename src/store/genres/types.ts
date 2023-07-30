import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE,
  SELECT_GENRE_FILTER
} from "./actionTypes";
import IGenre from "../../entities/Genre";

export interface GenresState {
  pending: boolean;
  genres: IGenre[];
  selectedGenre: string | null;
  error: string | null;
}

export interface FetchGenresSuccessPayload {
  genres: IGenre[];
}

export interface FetchGenresFailurePayload {
  error: string;
}


export interface FetchGenresRequest {
  type: typeof FETCH_GENRES_REQUEST;
}

export interface SelectGenreFilter {
  type: typeof SELECT_GENRE_FILTER;
  genre: string;
}

export type FetchGenresSuccess = {
  type: typeof FETCH_GENRES_SUCCESS;
  genres: FetchGenresSuccessPayload;
};

export type FetchGenresFailure = {
  type: typeof FETCH_GENRES_FAILURE;
  payload: FetchGenresFailurePayload;
};


export type GenresActions =
  | FetchGenresRequest
  | FetchGenresSuccess
  | FetchGenresFailure
  | SelectGenreFilter
  ;