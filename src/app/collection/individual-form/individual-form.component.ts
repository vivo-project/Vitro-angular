import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';
import * as CollectionActions from '../collection.actions';
import * as fromCollection from '../collection.reducer';

@Component({
  selector: 'vitro-individual-form',
  templateUrl: './individual-form.component.html',
  styleUrls: ['./individual-form.component.scss'],
})
export class IndividualFormComponent implements OnInit {
  api!: Observable<Api>;

  resource!: Observable<any>;

  form: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private store: Store<fromCollection.State>,
  ) {
    this.form = this.formBuilder.group({
      label: [undefined, [Validators.required]],
      uri: [undefined, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.api = this.route.data.pipe(map((data) => data['api']));
    this.resource = this.route.data.pipe(map((data) => data['resource']));

    this.populateForm();
  }

  onReset(): void {
    this.populateForm();
  }

  onSubmit(api: Api): void {
    const collection = api.tag.name;

    const body = {
      label: this.form.value.label,
      uri: this.form.value.uri,
    };

    this.resource.pipe(take(1)).subscribe((resource: any) => {
      if (!!resource) {
        const id = btoa(this.form.value.uri);
        this.store.dispatch(
          CollectionActions.updateResource({
            collection,
            id,
            resource: body,
          }),
        );
      } else {
        this.store.dispatch(
          CollectionActions.createResource({
            collection,
            resource: body,
          }),
        );
      }
    });
  }

  private populateForm(): void {
    this.resource.pipe(take(1)).subscribe((resource: any) => {
      if (!!resource) {
        this.form.controls['label'].setValue(resource.label);
        this.form.controls['uri'].setValue(resource.uri);
        this.form.markAsPristine();
      }
    });
  }
}
