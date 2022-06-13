import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Api } from '../../core/rest-api/rest-api.reducer';

@Component({
  selector: 'vitro-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  api!: Observable<Api>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data) => data['api']));
  }

  trackByFn(index: number): number {
    return index;
  }
}