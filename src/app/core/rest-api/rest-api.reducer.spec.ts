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
    it('should return the previous state with fetchingRestApi false and data defined', () => {
      const result = reducer(
        initialState,
        RestApiActions.loadRestApiSuccess({ data: {} }),
      );

      expect(result).toEqual({
        ...initialState,
        fetchingRestApi: false,
        data: {},
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
