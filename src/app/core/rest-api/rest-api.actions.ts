import { createAction, props } from '@ngrx/store';

export const loadRestApi = createAction('[RestApi] Load RestApi');

export const loadRestApiSuccess = createAction(
  '[RestApi] Load RestApi Success',
  props<{ data: any }>(),
);

export const loadRestApiFailure = createAction(
  '[RestApi] Load RestApi Failure',
  props<{ error: any }>(),
);
