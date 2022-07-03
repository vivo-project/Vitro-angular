import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';
import { selectApiResponsePropertiesByIdAndMethod } from 'src/app/core/rest-api/rest-api.selectors';
import * as CollectionActions from '../collection.actions';
import * as fromCollection from '../collection.reducer';

@Component({
  selector: 'vitro-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss'],
})
export class IndividualViewComponent implements OnInit {
  api!: Observable<Api>;

  resource!: Observable<any>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<fromCollection.State>,
  ) { }

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data: any) => data['api']));
    this.resource = this.route.data.pipe(map((data: any) => data['resource']));

    this.store.pipe(select(selectApiResponsePropertiesByIdAndMethod('geolocation', '/api/rest/1.0.0/geolocation', 'get'))).subscribe(console.log);
  }

  onDelete(api: Api, resource: any): void {
    const collection = api.tag.name;
    const id = btoa(resource.uri);
    this.store.dispatch(
      CollectionActions.deleteResource({ collection, id, resource }),
    );
  }
}
