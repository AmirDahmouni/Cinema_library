import { combineReducers } from "redux";

import moviesReducer from "./movies/reducer";
import languagesReducer from "./languages/reducer"
import genresReducer from "./genres/reducer"


const rootReducer = combineReducers({
  genresState: genresReducer,
  moviesState: moviesReducer,
  languagesState: languagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export type MoviesState = ReturnType<typeof moviesReducer>;
export type LanguagesState = ReturnType<typeof languagesReducer>;
export type GenresState = ReturnType<typeof genresReducer>;


export default rootReducer;