import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as CollectionActions from './collection.actions';

export const featureKey = 'collection';

export interface State extends EntityState<any> {
  creatingResource: boolean;
  readingResources: boolean;
  readingResource: boolean;
  updatingResource: boolean;
  deletingResource: boolean;
  error: any;
}

export function selectResourceByUri(resource: any): string {
  return resource.uri;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: selectResourceByUri,
});

export const initialState: State = adapter.getInitialState({
  creatingResource: false,
  readingResources: false,
  readingResource: false,
  updatingResource: false,
  deletingResource: false,
  error: undefined,
});

export const reducer = createReducer(
  initialState,
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
  on(CollectionActions.readResources, (state, {}) => ({
    ...state,
    readingResources: true,
  })),
  on(CollectionActions.readResourcesSuccess, (state, { data }) => {
    const { result } = data;

    return adapter.setAll(result, {
      ...state,
      readingResources: false,
    });
  }),
  on(CollectionActions.readResourcesFailure, (state, { error }) => ({
    ...state,
    readingResources: false,
    error,
  })),
  on(CollectionActions.readResource, (state, {}) => ({
    ...state,
    readingResource: true,
  })),
  on(CollectionActions.readResourceSuccess, (state, { data }) => {
    const { result } = data;

    return adapter.upsertOne(result[0], {
      ...state,
      readingResource: false,
    });
  }),
  on(CollectionActions.readResourceFailure, (state, { error }) => ({
    ...state,
    readingResource: false,
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
  on(CollectionActions.deleteResource, (state, {}) => ({
    ...state,
    deletingResource: true,
  })),
  on(CollectionActions.deleteResourceSuccess, (state, { resource }) => {
    return adapter.removeOne(resource, {
      ...state,
      deletingResource: false,
    });
  }),
  on(CollectionActions.deleteResourceFailure, (state, { error }) => ({
    ...state,
    deletingResource: false,
    error,
  })),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCreatingResource = (state: State) => state.creatingResource;
export const selectReadingResources = (state: State) => state.readingResources;
export const selectReadingResource = (state: State) => state.readingResource;
export const selectUpdatingResource = (state: State) => state.updatingResource;
export const selectDeletingResource = (state: State) => state.deletingResource;
export const selectError = (state: State) => state.error;
