import {
  FETCH_PLATFORMS_REQUEST,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_FAILURE,
  SELECT_PLATFORM_FILTER
} from "./actionTypes";
import { IPlatform } from "../../entities/Platform";

export interface PlatformsState {
  pending: boolean;
  platforms: IPlatform[];
  selectedPlatform: string | null;
  error: string | null;
}

export interface FetchPlatformsSuccessPayload {
  platforms: IPlatform[] | null;
}

export interface FetchPlatformsFailurePayload {
  error: string;
}


export interface FetchPlatformsRequest {
  type: typeof FETCH_PLATFORMS_REQUEST;
}

export interface SelectPlatformFilter {
  type: typeof SELECT_PLATFORM_FILTER;
  platform: String;
}

export type FetchPlatformsSuccess = {
  type: typeof FETCH_PLATFORMS_SUCCESS;
  payload: FetchPlatformsSuccessPayload;
};

export type FetchPlatformsFailure = {
  type: typeof FETCH_PLATFORMS_FAILURE;
  payload: FetchPlatformsFailurePayload;
};


export type PlatformsActions =
  | FetchPlatformsRequest
  | FetchPlatformsSuccess
  | FetchPlatformsFailure
  | SelectPlatformFilter
  ;