import { createAction, props } from '@ngrx/store';

export const loadRestDocs = createAction('[RestDocs] Load RestDocs');

export const loadRestDocsSuccess = createAction(
  '[RestDocs] Load RestDocs Success',
  props<{ data: any }>(),
);

export const loadRestDocsFailure = createAction(
  '[RestDocs] Load RestDocs Failure',
  props<{ error: any }>(),
);
