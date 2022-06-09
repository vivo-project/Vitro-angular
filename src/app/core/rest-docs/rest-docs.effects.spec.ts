import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { RestDocsEffects } from './rest-docs.effects';
import * as fromRestDocs from './rest-docs.reducer';
import * as RestDocsActions from './rest-docs.actions';

describe('RestDocsEffects', () => {
  let actions: Observable<any>;
  let effects: RestDocsEffects;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', {
    get: of({}),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RestDocsEffects,
        provideMockStore({
          initialState: {
            [fromRestDocs.restDocsFeatureKey]: fromRestDocs.initialState,
          },
        }),
        provideMockActions(() => actions),
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    effects = TestBed.inject<RestDocsEffects>(RestDocsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fetch rest docs', (done) => {
    actions = of(RestDocsActions.loadRestDocs());

    effects.loadRestDocs.subscribe((action) => {
      expect(action).toEqual({
        type: '[RestDocs] Load RestDocs Success',
        data: {},
      });
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalled();
  });
});
