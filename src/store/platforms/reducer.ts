import {
  FETCH_PLATFORMS_REQUEST,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_FAILURE,
  SELECT_PLATFORM_FILTER
} from "./actionTypes";

import { PlatformsActions, PlatformsState } from "./types";

const initialState: PlatformsState = {
  pending: false,
  platforms: [],
  selectedPlatform: null,
  error: null,
};

export default (state = initialState, action: PlatformsActions) => {
  switch (action.type) {
    case FETCH_PLATFORMS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        pending: false,
        platforms: action.payload.platforms,
        error: null,
      };
    case FETCH_PLATFORMS_FAILURE:
      return {
        ...state,
        pending: false,
        platforms: [],
        error: action.payload.error,
      };
    case SELECT_PLATFORM_FILTER:
      return {
        ...state,
        selectedPlatform: action.platform
      };
    default:
      return {
        ...state,
      };
  }
};