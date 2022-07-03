import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as RestApiActions from './rest-api.actions';

@Injectable()
export class RestApiEffects implements OnInitEffects {
  loadRestApi = createEffect(() => {
    return this.actions.pipe(
      ofType(RestApiActions.loadRestApi),
      concatMap(() =>
        this.http
          .get(
            `${environment.apiBaseUrl}/docs/rest/${environment.restVersion}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map((data) => RestApiActions.loadRestApiSuccess({ data })),
            catchError((error) =>
              of(RestApiActions.loadRestApiFailure({ error })),
            ),
          ),
      ),
    );
  });

  constructor(
    private readonly actions: Actions,
    private readonly http: HttpClient,
  ) {}

  ngrxOnInitEffects(): Action {
    return RestApiActions.loadRestApi();
  }
}
