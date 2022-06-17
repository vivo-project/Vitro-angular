import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollection from './collection.reducer';

export const selectCollectionState =
  createFeatureSelector<fromCollection.State>(fromCollection.featureKey);
export const selectIsFetchingResources = createSelector(
  selectCollectionState,
  fromCollection.selectFetchingResources,
);
export const selectResourceEntities = createSelector(
  selectCollectionState,
  fromCollection.selectEntities,
);
export const selectResources = createSelector(
  selectCollectionState,
  fromCollection.selectAll,
);
export const selectResourceById = (id: string) => {
  return createSelector(
    selectResourceEntities,
    (entities: Dictionary<any>) => entities[atob(id)] as any,
  );
};
export const selectErrorFetchingResources = createSelector(
  selectCollectionState,
  fromCollection.selectError,
);
