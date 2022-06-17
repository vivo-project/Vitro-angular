import * as CollectionActions from './collection.actions';

describe('loadResources', () => {
  it('should return an action', () => {
    expect(
      CollectionActions.loadResources({ collection: 'geolocation' }).type,
    ).toBe('[Collection] Load Resources');
  });
});

describe('loadResourcesSuccess', () => {
  it('should return an action', () => {
    const action = CollectionActions.loadResourcesSuccess({ data: {} });
    expect(action.type).toBe('[Collection] Load Resources Success');
    expect(action.data).toEqual({});
  });
});

describe('loadResourcesFailure', () => {
  it('should return an action', () => {
    const action = CollectionActions.loadResourcesFailure({ error: {} });
    expect(action.type).toBe('[Collection] Load Resources Failure');
    expect(action.error).toEqual({});
  });
});
