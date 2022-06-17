import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, skip, take } from 'rxjs';
import { loadResources } from './collection.actions';
import * as fromCollection from './collection.reducer';
import { selectResources } from './collection.selectors';

@Injectable({
  providedIn: 'root',
})
export class CollectionResolver implements Resolve<any[]> {
  constructor(private store: Store<fromCollection.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    const collection = route.paramMap.get('collection') as string;

    this.store.dispatch(loadResources({ collection }));

    return this.store.pipe(select(selectResources), take(2), skip(1));
  }
}
