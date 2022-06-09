import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { RestDocsEffects } from './rest-docs.effects';

describe('RestDocsEffects', () => {
  let actions: Observable<any>;
  let effects: RestDocsEffects;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RestDocsEffects,
        provideMockActions(() => actions),
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    effects = TestBed.inject(RestDocsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fetch rest docs', () => {
    const actions = of({ type: '[RestDocs] Load RestDocs' });

    const effects = new RestDocsEffects(actions, httpClientSpy);

    effects.loadRestDocs.subscribe();

    expect(httpClientSpy.get).toHaveBeenCalled();
  });
});
