import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchPlatformsFailure, fetchPlatformsSuccess } from "./actions";
import { FETCH_PLATFORMS_REQUEST } from "./actionTypes";
import { IPlatformResponse } from "../../entities/Platform";

const getPlatforms = () => axios.get<IPlatformResponse[]>(`${process.env.NEXT_PUBLIC_URL_API}/platforms/lists/parents`, {
  params: {
    key: process.env.NEXT_PUBLIC_KEY_API
  }
});


function* fetchPlatformsSaga() {
  try {

    const response: AxiosResponse<IPlatformResponse> = yield call(getPlatforms);
    yield put(fetchPlatformsSuccess({ platforms: response.data.results }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchPlatformsFailure({ error: error.message }));
  }
}

function* platformsSaga() {
  yield takeEvery(FETCH_PLATFORMS_REQUEST, fetchPlatformsSaga)
}

export default platformsSaga;