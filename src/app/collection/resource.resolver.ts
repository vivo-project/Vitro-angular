import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, skip, take } from 'rxjs';
import { loadResource } from './collection.actions';
import * as fromCollection from './collection.reducer';
import { selectResourceById } from './collection.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourceResolver implements Resolve<any> {
  constructor(private store: Store<fromCollection.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    const collection = route.paramMap.get('collection') as string;
    const id = route.paramMap.get('resource') as string;

    this.store.dispatch(loadResource({ collection, id }));

    return this.store.pipe(select(selectResourceById(id)), take(2), skip(1));
  }
}
