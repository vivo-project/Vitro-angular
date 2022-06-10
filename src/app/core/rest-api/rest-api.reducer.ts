import { createReducer, on } from '@ngrx/store';
import * as RestApiActions from './rest-api.actions';

export const restApiFeatureKey = 'restApi';

export interface State {
  fetchingRestApi: boolean;
  data: any;
  error: any;
}

export const initialState: State = {
  fetchingRestApi: false,
  data: {},
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(RestApiActions.loadRestApi, (state, {}) => ({
    ...state,
    fetchingRestApi: true,
  })),
  on(RestApiActions.loadRestApiSuccess, (state, { data }) => ({
    ...state,
    fetchingRestApi: false,
    data,
  })),
  on(RestApiActions.loadRestApiFailure, (state, { error }) => ({
    ...state,
    fetchingRestApi: false,
    data: {},
    error,
  })),
);

export const selectFetchingRestApi = (state: State) => state.fetchingRestApi;

export const selectData = (state: State) => state.data;

export const selectError = (state: State) => state.error;
