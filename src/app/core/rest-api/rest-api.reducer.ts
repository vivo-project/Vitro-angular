import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as RestApiActions from './rest-api.actions';

export const featureKey = 'restApi';

export interface Info {
  title: string;
  description: string;
  version: string;
}

export interface Tag {
  name: string;
  description: string;
}

export interface Api {
  tag: Tag;
  paths: { [path: string]: any };
}

export interface State extends EntityState<Api> {
  fetchingRestApi: boolean;
  openapi: string;
  info: Info;
  error: any;
}

export function selectApiName(api: Api): string {
  return api.tag.name;
}

export const adapter: EntityAdapter<Api> = createEntityAdapter<Api>({
  selectId: selectApiName,
});

export const initialState: State = adapter.getInitialState({
  fetchingRestApi: false,
  openapi: '',
  info: {
    title: '',
    description: '',
    version: '',
  },
  error: undefined,
});

export const reducer = createReducer(
  initialState,
  on(RestApiActions.loadRestApi, (state, {}) => ({
    ...state,
    fetchingRestApi: true,
  })),
  on(RestApiActions.loadRestApiSuccess, (state, { data }) => {
    const { openapi, info } = data;
    const apis: Api[] = !!data.tags
      ? data.tags.map((tag: Tag) => {
          const paths: { [path: string]: any } = {};

          if (!!data.paths) {
            Object.entries(data.paths).forEach(([path, entry]) => {
              if (path.indexOf(tag.name) >= 0) {
                paths[path] = entry;
              }
            });
          }

          return {
            tag,
            paths,
          };
        })
      : [];

    return adapter.setAll(apis, {
      ...state,
      fetchingRestApi: false,
      openapi,
      info,
    });
  }),
  on(RestApiActions.loadRestApiFailure, (state, { error }) => ({
    ...state,
    fetchingRestApi: false,
    error,
  })),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectFetchingRestApi = (state: State) => state.fetchingRestApi;
export const selectOpenApi = (state: State) => state.openapi;
export const selectInfo = (state: State) => state.info;
export const selectError = (state: State) => state.error;
