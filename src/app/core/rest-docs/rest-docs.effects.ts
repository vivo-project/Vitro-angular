import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as restDocsActions from './rest-docs.actions';

@Injectable()
export class RestDocsEffects implements OnInitEffects {
  loadRestDocs = createEffect(() => {
    return this.actions.pipe(
      ofType(restDocsActions.loadRestDocs),
      concatMap(() =>
        this.http
          .get(`${environment.apiBaseUrl}/docs/rest/1`, {
            headers: { Accept: 'application/json' },
          })
          .pipe(
            map((data) => restDocsActions.loadRestDocsSuccess({ data })),
            catchError((error) =>
              of(restDocsActions.loadRestDocsFailure({ error }))
            )
          )
      )
    );
  });

  constructor(
    private readonly actions: Actions,
    private readonly http: HttpClient
  ) {}

  ngrxOnInitEffects(): Action {
    return restDocsActions.loadRestDocs();
  }
}
