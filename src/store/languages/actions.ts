import {
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_FAILURE, FETCH_LANGUAGES_SUCCESS, SELECT_LANGUAGE_FILTER
} from "./actionTypes";
import {
  FetchLanguagesSuccessPayload,
  FetchLanguagesFailurePayload,
  LanguagesActions
} from "./types";


export const fetchLanguagesRequest = (): LanguagesActions => ({
  type: FETCH_LANGUAGES_REQUEST,
});

export const fetchLanguagesSuccess = (payload: FetchLanguagesSuccessPayload): LanguagesActions => ({
  type: FETCH_LANGUAGES_SUCCESS,
  payload,
});

export const fetchLanguagesFailure = (payload: FetchLanguagesFailurePayload): LanguagesActions => ({
  type: FETCH_LANGUAGES_FAILURE,
  payload,
});

export const selectLanguageFilter = (language: String | null): LanguagesActions => ({
  type: SELECT_LANGUAGE_FILTER,
  language,
})