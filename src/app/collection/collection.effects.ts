import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
      concatMap(({ collection, id }) =>
        this.http
          .get(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${id}`,
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

  createResource = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.createResource),
      concatMap(({ collection, resource }) =>
        this.http
          .post(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}`,
            resource,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map(() =>
              CollectionActions.createResourceSuccess({ collection, resource }),
            ),
            catchError((error) =>
              of(CollectionActions.createResourceFailure({ error })),
            ),
          ),
      ),
    );
  });

  updateResource = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.updateResource),
      concatMap(({ collection, id, resource }) =>
        this.http
          .post(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${id}`,
            resource,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map(() =>
              CollectionActions.updateResourceSuccess({ collection, resource }),
            ),
            catchError((error) =>
              of(CollectionActions.updateResourceFailure({ error })),
            ),
          ),
      ),
    );
  });

  createOrUpdateResourceSuccess = createEffect(
    () =>
      this.actions.pipe(
        ofType(
          CollectionActions.createResourceSuccess,
          CollectionActions.updateResourceSuccess,
        ),
        map(({ collection }) => this.router.navigate([`rest/${collection}`])),
      ),
    {
      dispatch: false,
    },
  );

  constructor(
    private readonly actions: Actions,
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}
}
