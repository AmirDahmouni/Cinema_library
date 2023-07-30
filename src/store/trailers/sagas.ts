import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchTrailerFailure, fetchTrailerSuccess } from "./actions";
import { FETCH_TRAILER_REQUEST } from "./actionTypes";
import { ITrailerResponse } from "../../entities/Trailer";
import { FetchTrailerRequest } from "./types";

const getTrailers = (gameId: string) => axios.get<ITrailerResponse[]>(`${process.env.NEXT_PUBLIC_URL_API}/games/${gameId}/movies`, {
  params: {
    key: process.env.NEXT_PUBLIC_KEY_API
  }
});


function* fetchTrailerSaga(action: FetchTrailerRequest) {
  try {

    const response: AxiosResponse<ITrailerResponse> = yield call(getTrailers, action.payload.gameId);
    yield put(fetchTrailerSuccess({ trailer: response.data.result }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchTrailerFailure({ error: error.message }));
  }
}

function* trailerSaga() {
  yield takeEvery(FETCH_TRAILER_REQUEST, fetchTrailerSaga)
}

export default trailerSaga;