import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRestDocs from '../rest-docs/rest-docs.reducer';

export interface State {
  [fromRestDocs.restDocsFeatureKey]: fromRestDocs.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromRestDocs.restDocsFeatureKey]: fromRestDocs.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
