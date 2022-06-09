import * as fromRestDocs from './rest-docs.reducer';
import { selectRestDocsState } from './rest-docs.selectors';

describe('RestDocs Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRestDocsState({
      [fromRestDocs.restDocsFeatureKey]: fromRestDocs.initialState,
    });

    expect(result).toEqual(fromRestDocs.initialState);
  });
});
