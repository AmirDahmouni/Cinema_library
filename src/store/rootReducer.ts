import { combineReducers } from "redux";

import gamesReducer from "./games/reducer";
import platformReducer from "./platforms/reducer"
import genresReducer from "./genres/reducer"
import trailerReducer from "./trailers/reducer"

const rootReducer = combineReducers({
  genresState: genresReducer,
  gamesState: gamesReducer,
  platformsState: platformReducer,
  trailerState: trailerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export type GameState = ReturnType<typeof gamesReducer>;
export type PlatformsState = ReturnType<typeof platformReducer>;
export type GenresState = ReturnType<typeof genresReducer>;
export type TrailerState = ReturnType<typeof trailerReducer>;

export default rootReducer;