import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vitro-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss'],
})
export class IndividualViewComponent implements OnInit {
  api!: Observable<Api>;

  resource!: Observable<any>;

  properties!: Observable<string[]>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data: any) => data['api']));
    this.resource = this.route.data.pipe(map((data: any) => data['resource']));
    this.properties = this.api.pipe(
      map((api: Api) => {
        const collectionAPi =
          api.paths[`/api/rest/${environment.restVersion}/${api.tag.name}`];
        const getResponses = collectionAPi.get.responses[200];
        const schema = getResponses.content['application/json'].schema;
        const properties = schema.properties.result.items.properties;
        return Object.keys(properties);
      }),
    );
  }
}
