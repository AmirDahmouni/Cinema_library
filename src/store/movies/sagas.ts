import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchMoviesFailure, fetchMoviesSuccess } from "./actions";
import { FETCH_MOVIES_REQUEST } from "./actionTypes";
import { FetchMoviesRequest } from "./types";
import IMovie from "../../entities/Movie";

type filters = {
  genreId: Number | null,
  language: string | null,
  sortOrder: string | null,
  searchText: string | null,
  pageParam: Number | null,
}

const getMovies = (filters: filters) => axios.get<IMovie[]>(
  `${process.env.NEXT_PUBLIC_URL_API}/discover/movie?`
  ,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`
    },
    params: {
      with_genres: filters?.genreId,
      with_original_language: filters?.language,
      sort_by: filters?.sortOrder,
      with_keywords: filters?.searchText,
      page: filters?.pageParam,
    }
  }
);


function* fetchMoviesSaga(request: FetchMoviesRequest | undefined) {
  try {
    const filters = request?.payload?.reduce((acc: any, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
    const response: AxiosResponse<{ results: any, total_pages: number }> = yield call(getMovies, filters);
    yield put(
      fetchMoviesSuccess({
        movies: response.data.results,
        nbPages: Math.ceil(response.data.total_pages / 20)
      })
    );
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchMoviesFailure({ error: error.message }));
  }
}

function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMoviesSaga)
}

export { moviesSaga };