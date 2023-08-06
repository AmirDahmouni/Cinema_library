import {
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAILURE,
  SELECT_LANGUAGE_FILTER
} from "./actionTypes";

import { LanguagesActions, LanguagesState } from "./types";

const initialState: LanguagesState = {
  pending: false,
  languages: [],
  selectedLanguage: null,
  error: null,
};

export default function reducer(state = initialState, action: LanguagesActions) {
  switch (action.type) {
    case FETCH_LANGUAGES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        languages: action.payload.languages,
        error: null,
      };
    case FETCH_LANGUAGES_FAILURE:
      return {
        ...state,
        pending: false,
        languages: [],
        error: action.payload.error,
      };
    case SELECT_LANGUAGE_FILTER:
      return {
        ...state,
        selectedLanguage: action.language
      };
    default:
      return {
        ...state,
      };
  }
};