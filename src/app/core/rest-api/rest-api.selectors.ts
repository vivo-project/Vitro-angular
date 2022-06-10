import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRestApi from './rest-api.reducer';

export const selectRestApiState = createFeatureSelector<fromRestApi.State>(
  fromRestApi.restApiFeatureKey,
);
export const selectIsFetchingRestApi = createSelector(
  selectRestApiState,
  fromRestApi.selectFetchingRestApi,
);
export const selectRestApi = createSelector(
  selectRestApiState,
  fromRestApi.selectData,
);
export const selectErrorFetchingRestApi = createSelector(
  selectRestApiState,
  fromRestApi.selectError,
);
