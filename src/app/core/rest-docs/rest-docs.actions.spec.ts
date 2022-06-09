import * as fromRestDocs from './rest-docs.actions';

describe('loadRestDocss', () => {
  it('should return an action', () => {
    expect(fromRestDocs.loadRestDocs().type).toBe('[RestDocs] Load RestDocs');
  });
});
