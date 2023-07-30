import {
  FETCH_TRAILER_REQUEST,
  FETCH_TRAILER_SUCCESS,
  FETCH_TRAILER_FAILURE
} from "./actionTypes";
import ITrailer from "../../entities/Trailer";

export interface TrailerState {
  pending: boolean;
  trailer: ITrailer | null;
  error: string | null;
}

export interface FetchTrailerRequestPayload {
  gameId: string
}

export interface FetchTrailerSuccessPayload {
  trailer: ITrailer | null;
}

export interface FetchTrailerFailurePayload {
  error: string;
}


export interface FetchTrailerRequest {
  type: typeof FETCH_TRAILER_REQUEST;
  payload: FetchTrailerRequestPayload
}


export type FetchTrailerSuccess = {
  type: typeof FETCH_TRAILER_SUCCESS;
  payload: FetchTrailerSuccessPayload;
};

export type FetchTrailerFailure = {
  type: typeof FETCH_TRAILER_FAILURE;
  payload: FetchTrailerFailurePayload;
};


export type TrailerActions =
  | FetchTrailerRequest
  | FetchTrailerSuccess
  | FetchTrailerFailure
  ;