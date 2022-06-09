import * as RestDocsActions from './rest-docs.actions';

describe('loadRestDocs', () => {
  it('should return an action', () => {
    expect(RestDocsActions.loadRestDocs().type).toBe(
      '[RestDocs] Load RestDocs',
    );
  });
});

describe('loadRestDocsSuccess', () => {
  it('should return an action', () => {
    const action = RestDocsActions.loadRestDocsSuccess({ data: {} });
    expect(action.type).toBe('[RestDocs] Load RestDocs Success');
    expect(action.data).toEqual({});
  });
});

describe('loadRestDocsFailure', () => {
  it('should return an action', () => {
    const action = RestDocsActions.loadRestDocsFailure({ error: {} });
    expect(action.type).toBe('[RestDocs] Load RestDocs Failure');
    expect(action.error).toEqual({});
  });
});
