import { createAction, props } from '@ngrx/store';

export const loadResources = createAction(
  '[Collection] Load Resources',
  props<{ collection: string }>(),
);

export const loadResourcesSuccess = createAction(
  '[Collection] Load Resources Success',
  props<{ data: any }>(),
);

export const loadResourcesFailure = createAction(
  '[Collection] Load Resources Failure',
  props<{ error: any }>(),
);

export const loadResource = createAction(
  '[Collection] Load Resource',
  props<{ collection: string; resource: string }>(),
);

export const loadResourceSuccess = createAction(
  '[Collection] Load Resource Success',
  props<{ data: any }>(),
);

export const loadResourceFailure = createAction(
  '[Collection] Load Resource Failure',
  props<{ error: any }>(),
);
