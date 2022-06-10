import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as restApiActions from './rest-api.actions';

@Injectable()
export class RestApiEffects implements OnInitEffects {
  loadRestApi = createEffect(() => {
    return this.actions.pipe(
      ofType(restApiActions.loadRestApi),
      concatMap(() =>
        this.http
          .get(`${environment.apiBaseUrl}/docs/rest/1`, {
            headers: { Accept: 'application/json' },
          })
          .pipe(
            map((data) => restApiActions.loadRestApiSuccess({ data })),
            catchError((error) =>
              of(restApiActions.loadRestApiFailure({ error })),
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
    return restApiActions.loadRestApi();
  }
}
