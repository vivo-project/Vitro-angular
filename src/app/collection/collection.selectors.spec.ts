import * as fromCollection from './collection.reducer';
import * as CollectionSelectors from './collection.selectors';

describe('Collection Selectors', () => {
  const initialState = {
    [fromCollection.featureKey]: fromCollection.initialState,
  };
  it('should select the feature state', () => {
    const result = CollectionSelectors.selectCollectionState(initialState);

    expect(result).toEqual(fromCollection.initialState);
  });
  it('should select reading rest api', () => {
    const result = CollectionSelectors.selectIsReadingResources(initialState);

    expect(result).toEqual(false);
  });
  it('should select error reading rest api', () => {
    const result =
      CollectionSelectors.selectErrorFetchingResources(initialState);

    expect(result).toEqual(undefined);
  });
});
