import { FETCH_TRAILER_REQUEST, FETCH_TRAILER_FAILURE, FETCH_TRAILER_SUCCESS } from "./actionTypes";
import {
  FetchTrailerSuccessPayload,
  FetchTrailerFailurePayload,
  FetchTrailerRequestPayload,
  TrailerActions
} from "./types";



export const fetchTrailerRequest = (payload: FetchTrailerRequestPayload): TrailerActions => ({
  type: FETCH_TRAILER_REQUEST,
  payload,
});

export const fetchTrailerSuccess = (payload: FetchTrailerSuccessPayload): TrailerActions => ({
  type: FETCH_TRAILER_SUCCESS,
  payload,
});

export const fetchTrailerFailure = (payload: FetchTrailerFailurePayload): TrailerActions => ({
  type: FETCH_TRAILER_FAILURE,
  payload,
});

