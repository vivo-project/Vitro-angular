import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRestDocs from './rest-docs.reducer';

export const selectRestDocsState = createFeatureSelector<fromRestDocs.State>(
  fromRestDocs.restDocsFeatureKey,
);
export const selectIsFetchingDocs = createSelector(
  selectRestDocsState,
  fromRestDocs.selectFetchingDocs,
);
export const selectRestDocs = createSelector(
  selectRestDocsState,
  fromRestDocs.selectData,
);
export const selectErrorFetchingRestDocs = createSelector(
  selectRestDocsState,
  fromRestDocs.selectError,
);
