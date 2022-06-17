import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRestApi from './rest-api.reducer';

export const selectRestApiState = createFeatureSelector<fromRestApi.State>(
  fromRestApi.featureKey,
);
export const selectRestApiEntities = createSelector(
  selectRestApiState,
  fromRestApi.selectEntities,
);
export const selectRestApis = createSelector(
  selectRestApiState,
  fromRestApi.selectAll,
);
export const selectApiById = (id: string) => {
  return createSelector(
    selectRestApiEntities,
    (entities: Dictionary<fromRestApi.Api>) => entities[id] as fromRestApi.Api,
  );
};
export const selectIsFetchingRestApi = createSelector(
  selectRestApiState,
  fromRestApi.selectFetchingRestApi,
);
export const selectOpenApi = createSelector(
  selectRestApiState,
  fromRestApi.selectOpenApi,
);
export const selectInfo = createSelector(
  selectRestApiState,
  fromRestApi.selectInfo,
);
export const selectErrorFetchingRestApi = createSelector(
  selectRestApiState,
  fromRestApi.selectError,
);
