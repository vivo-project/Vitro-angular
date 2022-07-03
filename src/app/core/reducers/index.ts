import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRestApi from '../rest-api/rest-api.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromRestApi.featureKey]: fromRestApi.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromRestApi.featureKey]: fromRestApi.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
