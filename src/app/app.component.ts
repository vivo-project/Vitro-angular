import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRestApi from './core/rest-api/rest-api.reducer';
import { selectRestApi } from './core/rest-api/rest-api.selectors';

@Component({
  selector: 'vitro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<fromRestApi.State>) {}

  ngOnInit(): void {
    this.store.pipe(select(selectRestApi)).subscribe((data) => {
      console.log(data);
    });
  }
}
