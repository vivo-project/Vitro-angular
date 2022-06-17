import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as CollectionActions from './collection.actions';

export const featureKey = 'collection';

export interface State extends EntityState<any> {
  fetchingResources: boolean;
  fetchingResource: boolean;
  creatingResource: boolean;
  updatingResource: boolean;
  error: any;
}

export function selectResourceByUri(resource: any): string {
  return resource.uri;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: selectResourceByUri,
});

export const initialState: State = adapter.getInitialState({
  fetchingResources: false,
  fetchingResource: false,
  creatingResource: false,
  updatingResource: false,
  error: undefined,
});

export const reducer = createReducer(
  initialState,
  on(CollectionActions.loadResources, (state, {}) => ({
    ...state,
    fetchingResources: true,
  })),
  on(CollectionActions.loadResourcesSuccess, (state, { data }) => {
    const { result } = data;

    return adapter.setAll(result, {
      ...state,
      fetchingResources: false,
    });
  }),
  on(CollectionActions.loadResourcesFailure, (state, { error }) => ({
    ...state,
    fetchingResources: false,
    error,
  })),
  on(CollectionActions.loadResource, (state, {}) => ({
    ...state,
    fetchingResource: true,
  })),
  on(CollectionActions.loadResourceSuccess, (state, { data }) => {
    const { result } = data;

    return adapter.upsertOne(result[0], {
      ...state,
      fetchingResource: false,
    });
  }),
  on(CollectionActions.loadResourceFailure, (state, { error }) => ({
    ...state,
    fetchingResource: false,
    error,
  })),
  on(CollectionActions.createResource, (state, {}) => ({
    ...state,
    createResource: true,
  })),
  on(CollectionActions.createResourceSuccess, (state, { resource }) => {
    return adapter.addOne(resource, {
      ...state,
      createResource: false,
    });
  }),
  on(CollectionActions.createResourceFailure, (state, { error }) => ({
    ...state,
    createResource: false,
    error,
  })),
  on(CollectionActions.updateResource, (state, {}) => ({
    ...state,
    updatingResource: true,
  })),
  on(CollectionActions.updateResourceSuccess, (state, { resource }) => {
    return adapter.updateOne(resource, {
      ...state,
      updatingResource: false,
    });
  }),
  on(CollectionActions.updateResourceFailure, (state, { error }) => ({
    ...state,
    updatingResource: false,
    error,
  })),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectFetchingResources = (state: State) =>
  state.fetchingResources;
export const selectFetchingResource = (state: State) => state.fetchingResource;
export const selectCreatingResource = (state: State) => state.creatingResource;
export const selectUpdatingResource = (state: State) => state.updatingResource;
export const selectError = (state: State) => state.error;
