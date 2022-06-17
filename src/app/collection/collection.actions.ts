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
  props<{ collection: string; id: string }>(),
);

export const loadResourceSuccess = createAction(
  '[Collection] Load Resource Success',
  props<{ data: any }>(),
);

export const loadResourceFailure = createAction(
  '[Collection] Load Resource Failure',
  props<{ error: any }>(),
);

export const createResource = createAction(
  '[Collection] Create Resource',
  props<{ collection: string; resource: any }>(),
);

export const createResourceSuccess = createAction(
  '[Collection] Create Resource Success',
  props<{ collection: string; resource: any }>(),
);

export const createResourceFailure = createAction(
  '[Collection] Create Resource Failure',
  props<{ error: any }>(),
);

export const updateResource = createAction(
  '[Collection] Update Resource',
  props<{ collection: string; id: string; resource: any }>(),
);

export const updateResourceSuccess = createAction(
  '[Collection] Update Resource Success',
  props<{ collection: string; resource: any }>(),
);

export const updateResourceFailure = createAction(
  '[Collection] Update Resource Failure',
  props<{ error: any }>(),
);
