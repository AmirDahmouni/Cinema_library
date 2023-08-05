import { call } from "redux-saga/effects";
import { moviesSaga } from "./movies/sagas";
import platformsSaga from "./platforms/sagas";
import genresSaga from "./genres/sagas";
import trailerSaga from "./trailers/sagas";

export function* rootSaga() {
  yield ([
    call(moviesSaga),
    call(genresSaga)
  ]);
}