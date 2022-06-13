import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';
import { selectApiById } from 'src/app/core/rest-api/rest-api.selectors';
import * as fromRestApi from '../../core/rest-api/rest-api.reducer';

@Injectable({
  providedIn: 'root',
})
export class CollectionResolver implements Resolve<any> {
  constructor(private store: Store<fromRestApi.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('api') as string;

    return this.store.pipe(
      select(selectApiById(id)),
      filter((api: fromRestApi.Api) => !!api),
      take(1),
    );
  }
}
