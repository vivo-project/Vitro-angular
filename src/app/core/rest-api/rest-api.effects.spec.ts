import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Observable, of } from 'rxjs';
import * as RestApiActions from './rest-api.actions';
import { RestApiEffects } from './rest-api.effects';
import * as fromRestApi from './rest-api.reducer';

describe('RestApiEffects', () => {
  let actions: Observable<any>;
  let effects: RestApiEffects;
  let httpClientSpy: Spy<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RestApiEffects,
        provideMockStore({
          initialState: {
            [fromRestApi.restApiFeatureKey]: fromRestApi.initialState,
          },
        }),
        provideMockActions(() => actions),
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) },
      ],
    });

    effects = TestBed.inject<RestApiEffects>(RestApiEffects);
    httpClientSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should succeed fetching rest docs', (done) => {
    httpClientSpy.get.and.nextWith({});

    actions = of(RestApiActions.loadRestApi());

    effects.loadRestApi.subscribe((action) => {
      expect(action).toEqual({
        type: '[RestApi] Load RestApi Success',
        data: {},
      });
      done();
    });

    effects.ngrxOnInitEffects();

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should fail fetching rest docs', (done) => {
    httpClientSpy.get.and.throwWith({});

    actions = of(RestApiActions.loadRestApi());

    effects.loadRestApi.subscribe((action) => {
      expect(action).toEqual({
        type: '[RestApi] Load RestApi Failure',
        error: {},
      });
      done();
    });

    effects.ngrxOnInitEffects();

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
