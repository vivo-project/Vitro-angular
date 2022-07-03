import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollection from './collection.reducer';

export const selectCollectionState =
  createFeatureSelector<fromCollection.State>(fromCollection.featureKey);

export const selectIsCreatingResources = createSelector(
  selectCollectionState,
  fromCollection.selectCreatingResource,
);
export const selectIsReadingResources = createSelector(
  selectCollectionState,
  fromCollection.selectReadingResources,
);
export const selectIsReadingResource = createSelector(
  selectCollectionState,
  fromCollection.selectReadingResource,
);
export const selectIsUpdatingResources = createSelector(
  selectCollectionState,
  fromCollection.selectUpdatingResource,
);
export const selectIsDeletingResources = createSelector(
  selectCollectionState,
  fromCollection.selectDeletingResource,
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
