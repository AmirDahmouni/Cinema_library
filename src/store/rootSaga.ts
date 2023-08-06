import { call } from "redux-saga/effects";
import { moviesSaga } from "./movies/sagas";
import languagesSaga from "./languages/sagas";
import genresSaga from "./genres/sagas";


export function* rootSaga() {
  yield ([
    call(moviesSaga),
    call(genresSaga),
    call(languagesSaga)
  ]);
}