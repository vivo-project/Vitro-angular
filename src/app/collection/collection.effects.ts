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

  readResources = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.readResources),
      concatMap(({ collection }) =>
        this.http
          .get(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map((data) => CollectionActions.readResourcesSuccess({ data })),
            catchError((error) =>
              of(CollectionActions.readResourcesFailure({ error })),
            ),
          ),
      ),
    );
  });

  readResource = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.readResource),
      concatMap(({ collection, id }) =>
        this.http
          .get(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${id}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map((data) => CollectionActions.readResourceSuccess({ data })),
            catchError((error) =>
              of(CollectionActions.readResourceFailure({ error })),
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
          .put(
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

  deleteResource = createEffect(() => {
    return this.actions.pipe(
      ofType(CollectionActions.deleteResource),
      concatMap(({ collection, id, resource }) =>
        this.http
          .delete(
            `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${id}`,
            {
              headers: { Accept: 'application/json' },
            },
          )
          .pipe(
            map(() =>
              CollectionActions.deleteResourceSuccess({ collection, resource }),
            ),
            catchError((error) =>
              of(CollectionActions.deleteResourceFailure({ error })),
            ),
          ),
      ),
    );
  });

  createUpdateOrDeleteResourceSuccess = createEffect(
    () =>
      this.actions.pipe(
        ofType(
          CollectionActions.createResourceSuccess,
          CollectionActions.updateResourceSuccess,
          CollectionActions.deleteResourceSuccess,
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
