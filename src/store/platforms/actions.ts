import { FETCH_PLATFORMS_REQUEST, FETCH_PLATFORMS_FAILURE, FETCH_PLATFORMS_SUCCESS, SELECT_PLATFORM_FILTER } from "./actionTypes";
import {
  FetchPlatformsSuccessPayload,
  FetchPlatformsFailurePayload,
  PlatformsActions
} from "./types";


export const fetchPlatformsRequest = (): PlatformsActions => ({
  type: FETCH_PLATFORMS_REQUEST,
});

export const fetchPlatformsSuccess = (payload: FetchPlatformsSuccessPayload): PlatformsActions => ({
  type: FETCH_PLATFORMS_SUCCESS,
  payload,
});

export const fetchPlatformsFailure = (payload: FetchPlatformsFailurePayload): PlatformsActions => ({
  type: FETCH_PLATFORMS_FAILURE,
  payload,
});

export const selectPlatformFilter = (platform: String): PlatformsActions => ({
  type: SELECT_PLATFORM_FILTER,
  platform,
})