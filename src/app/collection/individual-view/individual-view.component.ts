import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';

@Component({
  selector: 'vitro-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss'],
})
export class IndividualViewComponent implements OnInit {
  api!: Observable<Api>;

  resource!: Observable<any>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data: any) => data['api']));
    this.resource = this.route.data.pipe(map((data: any) => data['resource']));
  }
}
