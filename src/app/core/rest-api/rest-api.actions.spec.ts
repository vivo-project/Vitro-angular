import * as RestApiActions from './rest-api.actions';

describe('loadRestApi', () => {
  it('should return an action', () => {
    expect(RestApiActions.loadRestApi().type).toBe('[RestApi] Load RestApi');
  });
});

describe('loadRestApiSuccess', () => {
  it('should return an action', () => {
    const action = RestApiActions.loadRestApiSuccess({ data: {} });
    expect(action.type).toBe('[RestApi] Load RestApi Success');
    expect(action.data).toEqual({});
  });
});

describe('loadRestApiFailure', () => {
  it('should return an action', () => {
    const action = RestApiActions.loadRestApiFailure({ error: {} });
    expect(action.type).toBe('[RestApi] Load RestApi Failure');
    expect(action.error).toEqual({});
  });
});
