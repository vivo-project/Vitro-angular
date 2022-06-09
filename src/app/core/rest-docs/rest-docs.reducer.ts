import { createReducer, on } from '@ngrx/store';
import * as RestDocsActions from './rest-docs.actions';

export const restDocsFeatureKey = 'restDocs';

export interface State {
  fetchingDocs: boolean;
  data: any;
  error: any;
}

export const initialState: State = {
  fetchingDocs: false,
  data: {},
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(RestDocsActions.loadRestDocs, (state, {}) => ({
    ...state,
    fetchingDocs: true,
  })),
  on(RestDocsActions.loadRestDocsSuccess, (state, { data }) => ({
    ...state,
    fetchingDocs: false,
    data,
  })),
  on(RestDocsActions.loadRestDocsFailure, (state, { error }) => ({
    ...state,
    fetchingDocs: false,
    error,
  }))
);

export const selectFetchingDocs = (state: State) => state.fetchingDocs;

export const selectData = (state: State) => state.data;

export const selectError = (state: State) => state.error;
