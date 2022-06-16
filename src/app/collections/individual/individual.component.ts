import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';

@Component({
  selector: 'vitro-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualComponent implements OnInit {
  api!: Observable<Api>;
  individual!: Observable<any>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data) => data['api']));
    this.individual = this.route.data.pipe(map((data) => data['individual']));
  }
}
