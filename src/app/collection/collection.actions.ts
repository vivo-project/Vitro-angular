import { createAction, props } from '@ngrx/store';

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

export const readResources = createAction(
  '[Collection] Read Resources',
  props<{ collection: string }>(),
);

export const readResourcesSuccess = createAction(
  '[Collection] Read Resources Success',
  props<{ data: any }>(),
);

export const readResourcesFailure = createAction(
  '[Collection] Read Resources Failure',
  props<{ error: any }>(),
);

export const readResource = createAction(
  '[Collection] Read Resource',
  props<{ collection: string; id: string }>(),
);

export const readResourceSuccess = createAction(
  '[Collection] Read Resource Success',
  props<{ data: any }>(),
);

export const readResourceFailure = createAction(
  '[Collection] Read Resource Failure',
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

export const deleteResource = createAction(
  '[Collection] Delete Resource',
  props<{ collection: string; id: string; resource: any }>(),
);

export const deleteResourceSuccess = createAction(
  '[Collection] Delete Resource Success',
  props<{ collection: string; resource: any }>(),
);

export const deleteResourceFailure = createAction(
  '[Collection] Delete Resource Failure',
  props<{ error: any }>(),
);
