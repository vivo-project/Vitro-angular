import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Observable } from 'rxjs';
import { CollectionEffects } from './collection.effects';
import * as fromCollection from './collection.reducer';

describe('CollectionEffects', () => {
  let actions: Observable<any>;
  let effects: CollectionEffects;
  let httpClientSpy: Spy<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CollectionEffects,
        provideMockStore({
          initialState: {
            [fromCollection.featureKey]: fromCollection.initialState,
          },
        }),
        provideMockActions(() => actions),
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) },
      ],
    });

    effects = TestBed.inject<CollectionEffects>(CollectionEffects);
    httpClientSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
