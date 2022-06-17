import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { Api } from 'src/app/core/rest-api/rest-api.reducer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vitro-individual-form',
  templateUrl: './individual-form.component.html',
  styleUrls: ['./individual-form.component.scss'],
})
export class IndividualFormComponent implements OnInit {
  api!: Observable<Api>;

  resource!: Observable<any>;

  properties!: Observable<string[]>;

  form: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient,
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

    // TODO: this create form fields from properties
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

  onReset(): void {
    this.populateForm();
  }

  onSubmit(api: Api): void {
    const collection = api.tag.name;
    const url = `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}`;

    // TODO: iterate over properties and add values to body
    const body = {
      label: this.form.value.label,
      uri: this.form.value.uri,
    };

    this.resource.pipe(take(1)).subscribe((resource: any) => {
      console.log('submit');
      if (!!resource) {
        const resource = btoa(this.form.value.uri);
        this.http
          .put(`${url}/resource:${resource}`, body)
          .subscribe(console.log);
      } else {
        this.http.post(url, body).subscribe(console.log);
      }
    });
  }

  private populateForm(): void {
    // TODO: this should combine latest of properties and create and populate form
    this.resource.pipe(take(1)).subscribe((resource: any) => {
      if (!!resource) {
        this.form.controls['label'].setValue(resource.label);
        this.form.controls['uri'].setValue(resource.uri);
        this.form.markAsPristine();
      }
    });
  }
}
