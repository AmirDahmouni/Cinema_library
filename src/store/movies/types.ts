import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  UPDATE_MOVIES_FILTERS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_SCREEN_MOVIE_REQUEST,
} from "./actionTypes";
import IMovie from "../../entities/Movie";

export interface MoviesState {
  pending: boolean;
  movies: IMovie[];
  selectedMovie: IMovie | null;
  filters: { key: string, value: string | number | null }[];
  error: string | null;
  nbPages: number | null;
}

export interface FetchMoviesSuccessPayload {
  movies: IMovie[];
  nbPages: number
}
export interface FetchMovieSuccessPayload {
  movie: IMovie;
}

export interface FetchMoviesFailurePayload {
  error: string;
}

export interface FetchScreenMovieFailurePayload {
  error: string
}
export interface FetchMovieFailurePayload {
  error: string;
}

export interface FetchMovieScreensPayload {
  movieId: string
}

export interface FetchMovieRequestPayload {
  title: string
}



export interface FetchMovieRequest {
  type: typeof FETCH_MOVIES_REQUEST;
  payload: { key: string, value: string }[]
}


export interface FetchMoviesRequest {
  type: typeof FETCH_MOVIE_REQUEST;
  payload: { slug: string }
}

export interface UpdateMovieFilters {
  type: typeof UPDATE_MOVIES_FILTERS;
  filter: string;
  value: Number | string | null;
}

export type FetchMoviesSuccess = {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: FetchMoviesSuccessPayload;
};



export type FetchMoviesFailure = {
  type: typeof FETCH_MOVIES_FAILURE;
  payload: FetchMovieFailurePayload;
};

export type FetchMovieSuccess = {
  type: typeof FETCH_MOVIE_SUCCESS;
  payload: FetchMovieSuccessPayload;
};
export type FetchMovieFailure = {
  type: typeof FETCH_MOVIE_FAILURE;
  payload: FetchMovieFailurePayload;
};



export type MoviesActions =
  | FetchMoviesRequest
  | FetchMoviesSuccess
  | FetchMoviesFailure
  | UpdateMovieFilters
  | FetchMovieRequest
  | FetchMovieSuccess
  | FetchMovieFailure
  ;