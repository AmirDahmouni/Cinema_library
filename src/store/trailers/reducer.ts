import {
  FETCH_TRAILER_REQUEST,
  FETCH_TRAILER_SUCCESS,
  FETCH_TRAILER_FAILURE,
} from "./actionTypes";

import { TrailerActions, TrailerState } from "./types";

const initialState: TrailerState = {
  pending: false,
  trailer: null,
  error: null,
};

export default (state = initialState, action: TrailerActions) => {
  switch (action.type) {
    case FETCH_TRAILER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        pending: false,
        trailer: action.payload,
        error: null,
      };
    case FETCH_TRAILER_FAILURE:
      return {
        ...state,
        pending: false,
        trailer: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};