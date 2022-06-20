import * as CollectionActions from './collection.actions';

describe('loadResources', () => {
  it('should return an action', () => {
    expect(
      CollectionActions.readResources({ collection: 'geolocation' }).type,
    ).toBe('[Collection] Read Resources');
  });
});

describe('loadResourcesSuccess', () => {
  it('should return an action', () => {
    const action = CollectionActions.readResourcesSuccess({ data: {} });
    expect(action.type).toBe('[Collection] Read Resources Success');
    expect(action.data).toEqual({});
  });
});

describe('loadResourcesFailure', () => {
  it('should return an action', () => {
    const action = CollectionActions.readResourcesFailure({ error: {} });
    expect(action.type).toBe('[Collection] Read Resources Failure');
    expect(action.error).toEqual({});
  });
});
