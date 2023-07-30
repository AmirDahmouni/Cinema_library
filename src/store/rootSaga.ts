import { call } from "redux-saga/effects";
import { gamesSaga, gameSaga, screenSaga } from "./games/sagas";
import platformsSaga from "./platforms/sagas";
import genresSaga from "./genres/sagas";
import trailerSaga from "./trailers/sagas";

export function* rootSaga() {
  yield ([
    call(screenSaga),
    call(gameSaga),
    call(gamesSaga),
    call(platformsSaga),
    call(genresSaga),
    call(trailerSaga)
  ]);
}