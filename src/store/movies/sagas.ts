import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { fetchMovieSuccess, fetchMovieFailure } from "./actions";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIE_REQUEST } from "./actionTypes";
import IMovie from "../../entities/Movie";
import { FetchMoviesRequest, FetchMovieRequest } from "./types";
import { log } from "console";


type filters = {
  genreId: Number | null,
  platformId: Number | null,
  sortOrder: string | null,
  searchText: string | null,
  pageParam: Number | null,
}


const getMovies = (filters: filters) => axios.get<IMovie[]>(
  `${process.env.NEXT_PUBLIC_URL_API}/discover/movie?language=en-US`
  ,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`
    },
    params: {
      with_genres: filters?.genreId,
      platforms: filters?.platformId,
      sort_by: filters?.sortOrder,
      with_keywords: filters?.searchText,
      page: filters?.pageParam,
    }
  }
);



function* fetchMoviesSaga(action: FetchMoviesRequest) {
  const filters = action.payload?.reduce((acc: any, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {});
  try {
    const response: AxiosResponse<IMovie[]> = yield call(getMovies, filters);
    yield put(fetchMoviesSuccess({ movies: response.data.results, nbPages: Math.ceil(response.data.total_pages / 20) }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchMoviesFailure({ error: error.message }));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMoviesSaga)
}

export { moviesSaga };