import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRestApi from '../core/rest-api/rest-api.reducer';
import { selectRestApis } from '../core/rest-api/rest-api.selectors';

@Component({
  selector: 'vitro-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  apis!: Observable<fromRestApi.Api[]>;

  constructor(private readonly store: Store<fromRestApi.State>) {}

  ngOnInit(): void {
    this.apis = this.store.pipe(select(selectRestApis));
  }

  trackByFn(index: number): number {
    return index;
  }
}
