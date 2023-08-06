import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse, AxiosError } from 'axios'
import { fetchLanguagesFailure, fetchLanguagesSuccess } from "./actions";
import { FETCH_LANGUAGES_REQUEST } from "./actionTypes";
import { ILanguage } from "../../entities/Language";

const getLanguages = () => axios.get<ILanguage[]>(`${process.env.NEXT_PUBLIC_URL_API}/configuration/languages`, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`
  }
});


function* fetchLanguagesSaga() {
  try {

    const response: AxiosResponse<any[]> = yield call(getLanguages);
    yield put(fetchLanguagesSuccess({ languages: response.data }));
  } catch (e) {
    const error = e as AxiosError;
    yield put(fetchLanguagesFailure({ error: error.message }));
  }
}

function* languagesSaga() {
  yield takeEvery(FETCH_LANGUAGES_REQUEST, fetchLanguagesSaga)
}

export default languagesSaga;