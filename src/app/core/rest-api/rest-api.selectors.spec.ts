import * as fromRestApi from './rest-api.reducer';
import * as RestApiSelectors from './rest-api.selectors';

describe('RestApi Selectors', () => {
  const initialState = {
    [fromRestApi.restApiFeatureKey]: fromRestApi.initialState,
  };
  it('should select the feature state', () => {
    const result = RestApiSelectors.selectRestApiState(initialState);

    expect(result).toEqual(fromRestApi.initialState);
  });
  it('should select fetching rest api', () => {
    const result = RestApiSelectors.selectIsFetchingRestApi(initialState);

    expect(result).toEqual(false);
  });
  it('should select rest api', () => {
    const result = RestApiSelectors.selectOpenApi(initialState);

    expect(result).toEqual('');
  });
  it('should select error fetching rest api', () => {
    const result = RestApiSelectors.selectErrorFetchingRestApi(initialState);

    expect(result).toEqual(undefined);
  });
});
