import {
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAILURE,
  SELECT_LANGUAGE_FILTER
} from "./actionTypes";
import { ILanguage } from "../../entities/Language";

export interface LanguagesState {
  pending: boolean;
  languages: ILanguage[];
  selectedLanguage: string | null;
  error: string | null;
}

export interface FetchLanguagesSuccessPayload {
  languages: ILanguage[] | null;
}

export interface FetchLanguagesFailurePayload {
  error: string;
}


export interface FetchLanguagesRequest {
  type: typeof FETCH_LANGUAGES_REQUEST;
}

export interface SelectLanguageFilter {
  type: typeof SELECT_LANGUAGE_FILTER;
  language: String;
}

export type FetchLanguagesSuccess = {
  type: typeof FETCH_LANGUAGES_SUCCESS;
  payload: FetchLanguagesSuccessPayload;
};

export type FetchLanguagesFailure = {
  type: typeof FETCH_LANGUAGES_FAILURE;
  payload: FetchLanguagesFailurePayload;
};


export type LanguagesActions =
  | FetchLanguagesRequest
  | FetchLanguagesSuccess
  | FetchLanguagesFailure
  | SelectLanguageFilter
  ;