import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { RestApiEffects } from './rest-api.effects';
import * as fromRestApi from './rest-api.reducer';
import * as RestApiActions from './rest-api.actions';

describe('RestApiEffects', () => {
  let actions: Observable<any>;
  let effects: RestApiEffects;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', {
    get: of({}),
  });

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
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    effects = TestBed.inject<RestApiEffects>(RestApiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fetch rest docs', (done) => {
    actions = of(RestApiActions.loadRestApi());

    effects.loadRestApi.subscribe((action) => {
      expect(action).toEqual({
        type: '[RestApi] Load RestApi Success',
        data: {},
      });
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalled();
  });
});
