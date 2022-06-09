import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RestDocsEffects } from './rest-docs.effects';

describe('RestDocsEffects', () => {
  let actions: Observable<any>;
  let effects: RestDocsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestDocsEffects, provideMockActions(() => actions)],
    });

    effects = TestBed.inject(RestDocsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
