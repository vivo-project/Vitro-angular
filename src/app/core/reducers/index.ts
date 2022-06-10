import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRestApi from '../rest-api/rest-api.reducer';

export interface State {
  [fromRestApi.restApiFeatureKey]: fromRestApi.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromRestApi.restApiFeatureKey]: fromRestApi.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
