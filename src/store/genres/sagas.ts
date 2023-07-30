import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchGenresFailure, fetchGenresSuccess } from "./actions";
import { FETCH_GENRES_REQUEST } from "./actionTypes";
import IGenre from "../../entities/Genre";

const getGenres = () => axios.get<IGenre[]>(`${process.env.NEXT_PUBLIC_URL_API}/genres?key=${process.env.NEXT_PUBLIC_KEY_API}`);


function* fetchGenresSaga() {
  try {

    const response: AxiosResponse<IGenre> = yield call(getGenres);
    yield put(fetchGenresSuccess({ genres: response.data.results }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchGenresFailure({ error: error.message }));
  }
}

function* genresSaga() {
  yield takeLatest(FETCH_GENRES_REQUEST, fetchGenresSaga)
}

export default genresSaga;