import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
  UPDATE_GAMES_FILTERS,
  FETCH_GAME_REQUEST,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_FAILURE,
  FETCH_SCREEN_GAME_REQUEST,
  FETCH_SCREEN_GAME_SUCESS,
  FETCH_SCREEN_GAME_FAILURE

} from "./actionTypes";
import IGame from "../../entities/Game";
import IScreenshot from "../../entities/Screenshot";
export interface GamesState {
  pending: boolean;
  games: IGame[];
  selectedGame: IGame | null;
  screens: IScreenshot[] | null;
  filters: { key: string, value: string | number | null }[];
  error: string | null;
  nbPages: number | null;
}

export interface FetchGamesSuccessPayload {
  games: IGame[];
  nbPages: number
}
export interface FetchGameSuccessPayload {
  game: IGame;
}

export interface FetchGamesFailurePayload {
  error: string;
}

export interface FetchScreenGameFailurePayload {
  error: string
}
export interface FetchGameFailurePayload {
  error: string;
}

export interface FetchGameScreensPayload {
  gameId: string
}

export interface FetchGameRequestPayload {
  slug: string
}

export interface FetchGameScreensSucessPayload {
  screens: IScreenshot[]
}


export interface FetchGamesRequest {
  type: typeof FETCH_GAMES_REQUEST;
  payload: { key: string, value: string }[]
}

export interface FetchGameScreensRequest {
  type: typeof FETCH_SCREEN_GAME_REQUEST;
  payload: { game: string }
}

export interface FetchGameRequest {
  type: typeof FETCH_GAME_REQUEST;
  payload: { slug: string }
}

export interface UpdateGamesFilters {
  type: typeof UPDATE_GAMES_FILTERS;
  filter: string;
  value: Number | string;
}

export type FetchGamesSuccess = {
  type: typeof FETCH_GAMES_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGameScreensSuccess = {
  type: typeof FETCH_SCREEN_GAME_SUCESS;
  payload: FetchGameScreensSucessPayload;
};

export type FetchGamesFailure = {
  type: typeof FETCH_GAMES_FAILURE;
  payload: FetchGamesFailurePayload;
};

export type FetchGameSuccess = {
  type: typeof FETCH_GAME_SUCCESS;
  payload: FetchGameSuccessPayload;
};
export type FetchGameFailure = {
  type: typeof FETCH_GAME_FAILURE;
  payload: FetchGameFailurePayload;
};

export type FetchScreenSuccess = {
  type: typeof FETCH_SCREEN_GAME_SUCESS;
  payload: FetchGameScreensSucessPayload;
};

export type FetchScreenFailure = {
  type: typeof FETCH_SCREEN_GAME_FAILURE;
  payload: FetchGameSuccessPayload;
};



export type FetchScreenGameFailure = {
  type: typeof FETCH_SCREEN_GAME_FAILURE;
  payload: FetchGamesFailurePayload;
};


export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure
  | UpdateGamesFilters
  | FetchGameRequest
  | FetchGameSuccess
  | FetchGameFailure
  | FetchGameScreensRequest
  | FetchGameScreensSuccess
  | FetchScreenGameFailure
  ;