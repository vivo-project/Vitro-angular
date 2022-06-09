import * as RestDocsActions from './rest-docs.actions';
import { initialState, reducer } from './rest-docs.reducer';

describe('RestDocs Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('a load rest docs action', () => {
    it('should return the previous state with fetchingDocs true', () => {
      const result = reducer(initialState, RestDocsActions.loadRestDocs());

      expect(result).toEqual({
        ...initialState,
        fetchingDocs: true,
      });
    });
    it('should return the previous state with fetchingDocs false and data defined', () => {
      const result = reducer(
        initialState,
        RestDocsActions.loadRestDocsSuccess({ data: {} }),
      );

      expect(result).toEqual({
        ...initialState,
        fetchingDocs: false,
        data: {},
      });
    });
    it('should return the previous state with fetchingDocs false and error defined', () => {
      const result = reducer(
        initialState,
        RestDocsActions.loadRestDocsFailure({ error: {} }),
      );

      expect(result).toEqual({
        ...initialState,
        fetchingDocs: false,
        error: {},
      });
    });
  });
});
