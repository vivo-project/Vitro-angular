import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';

@Component({
  selector: 'vitro-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.scss'],
})
export class IndividualListComponent implements OnInit {
  api!: Observable<Api>;

  resources!: Observable<any[]>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data: any) => data['api']));
    this.resources = this.route.data.pipe(
      map((data: any) => data['resources']),
    );
  }

  getResourceId(resource: any): string {
    return btoa(resource.uri);
  }

  trackByFn(index: number): number {
    return index;
  }
}
