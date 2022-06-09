import * as fromRestDocs from './rest-docs.reducer';
import * as RestDocsSelectors from './rest-docs.selectors';

describe('RestDocs Selectors', () => {
  const initialState = {
    [fromRestDocs.restDocsFeatureKey]: fromRestDocs.initialState,
  };
  it('should select the feature state', () => {
    const result = RestDocsSelectors.selectRestDocsState(initialState);

    expect(result).toEqual(fromRestDocs.initialState);
  });
  it('should select fetching docs', () => {
    const result = RestDocsSelectors.selectIsFetchingDocs(initialState);

    expect(result).toEqual(false);
  });
  it('should select rest docs', () => {
    const result = RestDocsSelectors.selectRestDocs(initialState);

    expect(result).toEqual({});
  });
  it('should select error fetching rest docs', () => {
    const result = RestDocsSelectors.selectErrorFetchingRestDocs(initialState);

    expect(result).toEqual(undefined);
  });
});
