import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as CollectionActions from './collection.actions';

@Injectable()
export class CollectionEffects {
  loadResources = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.loadResources),
      concatMap(({ collection }) =>
        this.http
          .get(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map((data) => CollectionActions.loadResourcesSuccess({ data })),
            catchError((error) =>
              of(CollectionActions.loadResourcesFailure({ error })),
            ),
          ),
      ),
    );
  });

  loadResource = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.loadResource),
      concatMap(({ collection, resource }) =>
        this.http
          .get(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${resource}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map((data) => CollectionActions.loadResourceSuccess({ data })),
            catchError((error) =>
              of(CollectionActions.loadResourceFailure({ error })),
            ),
          ),
      ),
    );
  });

  constructor(
    private readonly actions: Actions,
    private readonly http: HttpClient,
  ) {}
}
