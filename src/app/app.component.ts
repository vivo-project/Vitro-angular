import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRestDocs from './core/rest-docs/rest-docs.reducer';
import { selectRestDocs } from './core/rest-docs/rest-docs.selectors';

@Component({
  selector: 'vitro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<fromRestDocs.State>) {}

  ngOnInit(): void {
    this.store.pipe(select(selectRestDocs)).subscribe((data) => {
      console.log(data);
    });
  }
}
