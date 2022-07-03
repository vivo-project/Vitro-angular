import * as RestApiActions from './rest-api.actions';
import { initialState, reducer } from './rest-api.reducer';

describe('RestApi Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('a load rest docs action', () => {
    it('should return the previous state with fetchingRestApi true', () => {
      const result = reducer(initialState, RestApiActions.loadRestApi());

      expect(result).toEqual({
        ...initialState,
        fetchingRestApi: true,
      });
    });
    it('should return the previous state with fetchingRestApi false and info defined', () => {
      const result = reducer(
        initialState,
        RestApiActions.loadRestApiSuccess({
          data: {
            openapi: '3.0.2',
            info: {
              title: 'Test',
              description: 'This is a test',
              version: '0.0.1',
            },
            tags: [],
            paths: {},
          },
        }),
      );

      expect(result).toEqual({
        ...initialState,
        fetchingRestApi: false,
        ids: [],
        entities: {},
        openapi: '3.0.2',
        info: {
          title: 'Test',
          description: 'This is a test',
          version: '0.0.1',
        },
        error: undefined,
      });
    });
    it('should return the previous state with fetchingRestApi false and error defined', () => {
      const result = reducer(
        initialState,
        RestApiActions.loadRestApiFailure({ error: {} }),
      );

      expect(result).toEqual({
        ...initialState,
        fetchingRestApi: false,
        error: {},
      });
    });
  });
});
