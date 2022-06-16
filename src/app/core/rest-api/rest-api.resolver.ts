import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';
import * as fromRestApi from './rest-api.reducer';
import { selectApiById } from './rest-api.selectors';

@Injectable({
  providedIn: 'root',
})
export class RestApiResolver implements Resolve<any> {
  constructor(private store: Store<fromRestApi.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const collection = route.paramMap.get('collection') as string;

    return this.store.pipe(
      select(selectApiById(collection)),
      filter((api: fromRestApi.Api) => !!api),
      take(1),
    );
  }
}
